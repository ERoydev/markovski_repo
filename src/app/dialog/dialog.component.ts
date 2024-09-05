import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
})
export class DialogComponent {
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
