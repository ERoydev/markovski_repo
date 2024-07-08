import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
  // I create input fields that are going to take arguments 
  @Input() buttonText: string = '';
  @Input() fontSize: string = '[1rem]';
}
