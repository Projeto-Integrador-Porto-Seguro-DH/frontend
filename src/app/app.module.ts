import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { UserLoginSigninFormComponent } from './pages/user-login-signin-form/user-login-signin-form.component';

@NgModule({
  declarations: [AppComponent, SigninComponent, HeroComponent, LoginComponent, UserLoginSigninFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
