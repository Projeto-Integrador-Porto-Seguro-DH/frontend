import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { ComponentCategoriasComponent } from './components/component-categorias/component-categorias.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { LoginComponent } from './components/login/login.component';
import { NossaHistoriaComponent } from './components/nossa-historia/nossa-historia.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalSearchComponent } from './components/modal-search/modal-search.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { QuantityInputComponent } from './components/quantity-input/quantity-input.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartDetailsComponent } from './components/shopping-cart-details/shopping-cart-details.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { CreatComponent } from './components/creat/creat.component';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ProfileAdmTabsComponent } from './components/profile-adm-tabs/profile-adm-tabs.component';
import { ProductCrudComponent } from './components/product-crud/product-crud.component';
import { CategoryCrudComponent } from './components/category/category-crud/category-crud.component';
import { AdmProfileComponent } from './pages/adm-profile/adm-profile.component';

import { OrdersComponent } from './components/orders/orders.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { ProductComponent } from './pages/product/product.component';

import { PhonePipe } from './pipes/phone-pipe/phone.pipe';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { SigninPasswordRulesComponent } from './components/signin-password-rules/signin-password-rules.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

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
    CartItemComponent,
    QuantityInputComponent,
    ShoppingCartComponent,
    UserPersonalInfoComponent,
    ComponentCategoriasComponent,
    CreatComponent,
    ShoppingCartSummaryComponent,
    ShoppingCartDetailsComponent,
    PhonePipe,
    ProfileTabsComponent,
    BackToTopComponent,
    ProfileAdmTabsComponent,
    ProductCrudComponent,
    AdmProfileComponent,
    CategoryCrudComponent,
    OrdersComponent,
    OrderCardComponent,
    PurchaseHistoryComponent,
    SigninPasswordRulesComponent,
    ProductUpdateComponent,
    ProductComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
