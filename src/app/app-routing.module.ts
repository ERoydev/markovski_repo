import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "create", component: AddUserComponent},
  {path: "edit/:id", component: EditUserComponent},
  {path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
