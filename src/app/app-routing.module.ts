import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginFormComponent },
  { path: 'cadastrar', component: SigninFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
