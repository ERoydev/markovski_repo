import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { DialogComponent } from '../dialog/dialog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule,
    DialogComponent,
    RouterModule,
  ],
  exports: [
    UserListComponent,
  ]
})
export class UserModule { }
