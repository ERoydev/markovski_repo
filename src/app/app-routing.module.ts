import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { UserFormComponent } from './core/user-form/user-form.component';
import { UserFormGuard } from './core/user-form/user-form.guard';
import { NotAllowedComponent } from './shared/components/not-allowed/not-allowed.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "create", component: UserFormComponent, canActivate: [UserFormGuard]},
  {path: "edit/:id", component: UserFormComponent, canActivate: [UserFormGuard]},
  {path: 'not-allowed', component: NotAllowedComponent},
  {path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
