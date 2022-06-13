import { FormsModule } from '@angular/forms';
import { ComponentCategoriasComponent } from './components/component-categorias/component-categorias.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import { NossaHistoriaComponent } from './components/nossa-historia/nossa-historia.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { ModalSearchComponent } from './components/modal-search/modal-search.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreatComponent } from './components/creat/creat.component';
import { PhonePipe } from './pipes/phone-pipe/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeroComponent,
    ProductCardComponent,
    HomeComponent,
    ProductGroupComponent,
    UserProfileComponent,
    LoginComponent,
    NossaHistoriaComponent,
    MenuComponent,
    ModalSearchComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    SigninFormComponent,
    UserPersonalInfoComponent,
    ComponentCategoriasComponent,
    ProfileComponent,
    CreatComponent,
    PhonePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
