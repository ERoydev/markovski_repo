import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddUserComponent
  ]
})
export class AddUserModule { }
