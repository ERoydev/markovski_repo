import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() previousButtonHandler!: () => void;
  @Input() nextButtonHandler!: () => void;

  constructor() {}

  onPreviousClick() {
    if (this.previousButtonHandler) {
      this.previousButtonHandler();
    }
  }

  onNextClick() {
    if (this.nextButtonHandler) {
      this.nextButtonHandler();
    }
  }
}
