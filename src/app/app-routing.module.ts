import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './products-listing/home/home.component';
import { LoginComponent } from './forms-pages/login/login.component';
import { RegisterComponent } from './forms-pages/register/register.component';
import { ShopComponent } from './products-listing/shop/shop.component';
import { SellComponent } from './forms-pages/sell/sell.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: ShopComponent,
    pathMatch: 'full'
  },
  {
    path: 'sell',
    component: SellComponent,
    pathMatch: 'full'
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
