import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

// Here i export and declare are the reusable components and i IMPORT this module in main app.modules

@NgModule({
  declarations: [
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PrimaryButtonComponent
  ]
})
export class SharedModule { }
