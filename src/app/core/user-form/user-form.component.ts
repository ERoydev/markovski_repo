import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { User } from 'src/app/types/user';
import { formatToYearMonthDay, formatToDayMonthYear } from 'src/app/utils/convertStringToDate';
import { futureDateValidator, nameValidator } from 'src/app/utils/custom-validators';
import { UserFormGuard } from './user-form.guard';

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
  isDialogOpen: boolean = false;


  constructor(
    private UserService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private dialogService: DialogService,
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
            const birth_date = formatToYearMonthDay(this.userData.birth_date)
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

  // DIALOG
  getDialog() {
    this.isDialogOpen = this.dialogService.isDialogOpen();
  }

  openDialog(event: Event): void {
    // I open the function and the i want to get the boolen value if dialog is open or not using getDialog()
    this.dialogService.openDialog(event);
    this.getDialog();
  }

  closeDialog(): void {
    this.dialogService.closeDialog();
    this.getDialog();
  }

  submitDialog(): void {
    this.onSubmit();
    this.dialogService.submitDialog();
    this.getDialog();
  }
  // END OF DIALOG

  // This will be invoked when the dialog i submitted
  onSubmit() {
    if (this.userForm.valid) {
      const data = this.userForm.value
      
      // I check if form is in edit mode or create
      if (!this.isEditMode) {
        // CREATE
        this.UserService.createUser(data).subscribe((response) => {
          console.log('POST Request is successfull', response);
          this.router.navigate(['']);
        })
      } else {
        // EDIT
        const userId = Number(this.userData?.id);

        this.UserService.editUser(userId, data).subscribe(response => {
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
