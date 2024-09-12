import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { UserFormComponent } from './core/user-form/user-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "create", component: UserFormComponent},
  {path: "edit/:id", component: UserFormComponent},
  {path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
