import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { nameValidator, futureDateValidator } from '../utils/custom-validators';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, nameValidator()]),
    lastName: new FormControl('', [Validators.required, nameValidator()]),
    role: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl('', [Validators.required, futureDateValidator()])
  })

  constructor(private UserService: UserService) {}

  onSubmit() {
    if (this.userForm.valid) {
      const data = this.userForm.value
      console.log('Form Submitted', this.userForm.value);
      this.UserService.create(data);
    
    } else {
      console.log('Form is invalid');
      this.userForm.markAllAsTouched(); // This will trigger validation messages
    }
  }

  options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Non-Binary', label: 'Non-Binary' },
    { value: 'Othe', label: 'Other' },
  ];
  selectedText = 'Please select a gender';
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  selectOption(option: { value: string; label: string }) {
    this.userForm.controls.gender.setValue(option.value);
    this.selectedText = option.label;
    this.toggleDropdown()
  }
}
