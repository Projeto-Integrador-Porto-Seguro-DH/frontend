import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductCategoriesComponent } from './pages/product-categories/product-categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginFormComponent },
  { path: 'cadastrar', component: SigninFormComponent },
  { path: 'carrinho', component: ShoppingCartComponent },
  {
    path: 'perfil',
    component: UserProfileComponent,
    children: [
      { path: '', redirectTo: 'dados', pathMatch: 'full' },
      { path: 'dados', component: UserPersonalInfoComponent },
      { path: 'pedidos', component: OrdersComponent },
      { path: 'pedidos/historico', component: PurchaseHistoryComponent },

    ],
  },
  { path: 'categorias', component: ProductCategoriesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
