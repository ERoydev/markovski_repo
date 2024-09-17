import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogModule } from '../dialog/dialog.module';



@NgModule({
  declarations: [
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  exports: [
    UserFormComponent
  ]
})
export class CoreModule { }
