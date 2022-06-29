import { ProductUpdateComponent } from './components/product-component/product-update/product-update.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmProfileComponent } from './pages/adm-profile/adm-profile.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SigninFormComponent } from './pages/signin-form/signin-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProductComponent } from './pages/product/product.component';

import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { ProductCrudComponent } from './components/product-component/product-crud/product-crud.component';
import { CategoryUpdateComponent } from './components/category/category-update/category-update.component';
import { CategoryCrudComponent } from './components/category/category-crud/category-crud.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginFormComponent },
  { path: 'cadastrar', component: SigninFormComponent },
  { path: 'carrinho', component: ShoppingCartComponent },
  { path: 'produto/:id', component: ProductComponent },
  { path: 'pesquisa', component: SearchComponent },
  { path: 'categorias', component: CategoryComponent },
  { path: 'categorias/:categoria', component: CategoryComponent },
  {
    path: 'perfil',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dados', pathMatch: 'full' },
      { path: 'dados', component: UserPersonalInfoComponent },
      { path: 'pedidos', component: OrdersComponent },
      { path: 'pedidos/historico', component: PurchaseHistoryComponent },
    ],
  },
  {
    path: 'admin',
    component: AdmProfileComponent,
    children: [
      { path: '', redirectTo: 'produtos', pathMatch: 'full' },
      { path: 'produtos', component: ProductCrudComponent },
      { path: 'produtos/atualizar/:id', component: ProductUpdateComponent },
      { path: 'categorias', component: CategoryCrudComponent },
      { path: 'categorias/atualizar/:id', component: CategoryUpdateComponent },
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
