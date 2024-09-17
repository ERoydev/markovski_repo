import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Output() close = new EventEmitter<void>();
  @Input() errorMessage: string = '';


  closeBanner() {
    this.close.emit()
  }
}
