import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  buttonText: string = 'Get Started';
  buttonFontSize: string = '1.3rem';
}
