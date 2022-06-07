import { ModalSearchComponent } from './components/modal-search/modal-search.component';
import { MenuComponent } from './components/menu/menu.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
