import { ProductUpdateComponent } from './components/product-component/product-update/product-update.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmProfileComponent } from './pages/adm-profile/adm-profile.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { ProductCrudComponent } from './components/product-component/product-crud/product-crud.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginFormComponent },
  { path: 'cadastrar', component: SigninFormComponent },
  {
    path: 'admPerfil',
    component: AdmProfileComponent,
    children: [
      { path: 'atualizar/:id', component: ProductUpdateComponent },
      { path: '', component: ProductCrudComponent}
    ],
  },
  { path: 'carrinho', component: ShoppingCartComponent },
  {
    path: 'perfil',
    component: UserProfileComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dados', pathMatch: 'full' },
      { path: 'dados', component: UserPersonalInfoComponent },
      { path: 'pedidos', component: OrdersComponent },
      { path: 'pedidos/historico', component: PurchaseHistoryComponent },
    ],
  },
  { path: '**', redirectTo: '' },
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
