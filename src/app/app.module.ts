import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CheckoutProcessComponent } from './pages/checkout-process/checkout-process.component';

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
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ProfileAdmTabsComponent } from './components/profile-adm-tabs/profile-adm-tabs.component';
import { CategoryCrudComponent } from './components/category/category-crud/category-crud.component';
import { AdmProfileComponent } from './pages/adm-profile/adm-profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryUpdateComponent } from './components/category/category-update/category-update.component';
import { PhonePipe } from './pipes/phone-pipe/phone.pipe';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { SigninPasswordRulesComponent } from './components/signin-password-rules/signin-password-rules.component';
import { ProductCrudComponent } from './components/product-component/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product-component/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-component/product-update/product-update.component';
import { CategoryReadComponent } from './components/category/category-read/category-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SearchComponent } from './pages/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProductReadComponent } from './components/product-component/product-read/product-read.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooleanPipePipe } from './pipes/boolean-pipe.pipe';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';
import { CategoryComponent } from './pages/category/category.component';

registerLocaleData(ptBr);

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
    ShoppingCartSummaryComponent,
    ShoppingCartDetailsComponent,
    PhonePipe,
    ProfileTabsComponent,
    BackToTopComponent,
    ProfileAdmTabsComponent,
    AdmProfileComponent,
    CategoryCrudComponent,
    OrdersComponent,
    OrderCardComponent,
    PurchaseHistoryComponent,
    SigninPasswordRulesComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductComponent,
    CategoryReadComponent,
    CategoryUpdateComponent,
    SearchComponent,
    SearchPipe,
    CheckoutProcessComponent,
    ProductReadComponent,
    BooleanPipePipe,
    CartEmptyComponent,
    CategoryComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
