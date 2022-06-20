import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmProfileComponent } from './pages/adm-profile/adm-profile.component';


import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginFormComponent },
  { path: 'cadastrar', component: SigninFormComponent },
  { path: 'perfil', component: UserProfileComponent },
  { path: 'admPerfil', component: AdmProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
