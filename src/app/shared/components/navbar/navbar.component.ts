import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  connectButtonHandler() {
    window.location.href = 'mailto:e.roydev@gmail.com?subject=Contact%20Us&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding...%0D%0A%0D%0AThank%20you!';
  }
}
