import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsComponent } from './components/cards/cards.component';
import { HeroComponent } from './components/hero/hero.component';
import { UserModule } from 'src/app/user/user.module';

// Here i import SharedModule and i have access to its reusable components
@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
