import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
})
export class DialogComponent {
  // The functions that i passed like an Event in user-list.component.html This is a CUSTOM EVENT HERE that child components can emit and parent components can listen to
  // @Output() => Marks the property as an output event that the parent component can bind to.
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<boolean>();

  closeDialog() {
    this.close.emit();
  }

  submitDialog() {
    this.submit.emit();
  }
}
