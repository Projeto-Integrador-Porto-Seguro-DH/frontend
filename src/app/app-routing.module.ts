import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginFormComponent },
  { path: 'cadastrar', component: SigninFormComponent},
  { path: 'carrinho', component: ShoppingCartComponent },
  { path: 'perfil', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
