import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';
import { User } from 'src/app/types/user';
import { convertToDateFormat, reverseConvertion } from 'src/app/utils/convertStringToDate';
import { futureDateValidator, nameValidator } from 'src/app/utils/custom-validators';

// For the simplicity for this application i have opportunity to reuse my userForm component for edit and create.

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private isEditMode: boolean = false;
  private userData: User | null = null;
  userForm: FormGroup;

  constructor(
    private UserService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      // i initialize my Form here with its validators
      firstName: ['', [Validators.required, nameValidator()]],
      lastName: ['', [Validators.required, nameValidator()]],
      role: ['', [Validators.required]],
      gender: ['', Validators.required],
      birthDate: ['', [Validators.required, futureDateValidator()]]
    });
  }

  ngOnInit(): void {
    // On init i get the specified user with his id
    this.activatedRoute.params.subscribe(v => {
      if (v['id']) {
        this.isEditMode = true;
        
        this.UserService.getUser(v['id']).subscribe(user => {
          this.userData = user;

          if (this.userData) {
            const birth_date = convertToDateFormat(this.userData.birth_date)
            this.selectedText = this.userData.gender

            // I update my userform with the values so i can show them in input fields.
            this.userForm.patchValue({
              firstName: this.userData.first_name,
              lastName: this.userData.last_name,
              role: this.userData.role,
              gender: this.userData.gender,
              birthDate: birth_date  
            });
          }
        })
      } else {
        this.isEditMode = false;
      }
    })
  }

  onSubmit() {
    if (this.userForm.valid) {
      const data = this.userForm.value
      
      if (!this.isEditMode) {
        this.UserService.createUser(data).subscribe((response) => {
          console.log('POST Request is successfull', response);
          this.router.navigate(['']);
        })
      } else {
        // I prepare my data because i use Snake case in backend and Cammel case in frontend
        const data_prepare = {
          id: Number(this.userData?.id),
          first_name: data.firstName,
          last_name: data.lastName,
          birth_date: reverseConvertion(data.birthDate),
          gender: data.gender,
          role: data.role
        }
        
        this.UserService.editUser(data_prepare.id, data_prepare).subscribe(response => {
          console.log('PUT Request is successfull', response);
          this.router.navigate(['']);
        })
      
      }

    } else {
      console.log('Form is invalid');
      this.userForm.markAllAsTouched(); // This will trigger validation messages
    }
  }


  // Code for Dropdown menu
  options = [
    // Mockaroo made me add all these
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Polygender', label: 'Polygender'},
    { value: 'Bigender', label: 'Bigender'},
    { value: 'Non-binary', label: 'Non-binary'},
    { value: 'Agender', label: 'Agender'},
    { value: 'Genderfluid', label: 'Genderfluid'},
    { value: 'Genderqueer', label: 'Genderqueer'}
  ];

  selectedText = 'Please select a gender';
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  selectOption(option: { value: string; label: string }) {
    this.userForm.get('gender')?.setValue(option.value);
    this.selectedText = option.label;
    this.toggleDropdown()
  }
  // End of Dropdown
}
