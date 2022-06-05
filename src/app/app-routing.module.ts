import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
// import { UserLoginSigninFormComponent } from './pages/user-login-signin-form/user-login-signin-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path: '/login', component: UserLoginSigninFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
