import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    EditUserComponent
  ]
})
export class EditUserModule { }
