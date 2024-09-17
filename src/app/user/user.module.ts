import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { RouterModule } from '@angular/router';
import { DialogModule } from '../dialog/dialog.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule,
    RouterModule,
    DialogModule,
    SharedModule,
  ],
  exports: [
    UserListComponent,
  ]
})
export class UserModule { }
