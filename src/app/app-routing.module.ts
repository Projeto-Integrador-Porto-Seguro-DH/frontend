import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{path: 'login', component: LoginComponent},
{path: 'signin', component: SigninComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
