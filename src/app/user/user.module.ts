import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { DialogComponent } from '../dialog/dialog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    DialogComponent,
    RouterModule,
  ],
  exports: [
    UserListComponent,
    UserFormComponent
  ]
})
export class UserModule { }
