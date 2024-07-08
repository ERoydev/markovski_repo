import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  githubClickHandler() {
    window.open('https://github.com/ERoydev/', '_blank');
  }

  linkedInClickHandler() {
    window.open('https://www.linkedin.com/in/emil-roydev-91450b26a/', '_blank');
  }
}
