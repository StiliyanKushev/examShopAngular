import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './products-listing/home/home.component';
import { LoginComponent } from './forms-pages/login/login.component';
import { RegisterComponent } from './forms-pages/register/register.component';
import { ShopComponent } from './products-listing/shop/shop.component';
import { SellComponent } from './forms-pages/sell/sell.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeResolver } from './products-listing/home/home.resolver';
import { ShopResolver } from './products-listing/shop/shop.resolver';
import { EditComponent } from './forms-pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: {
      data: HomeResolver
    }
  },
  {
    path: 'shop',
    component: ShopComponent,
    pathMatch: 'full',
    resolve: {
      data: ShopResolver
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuardService],
    resolve: {
      data: ShopResolver
    }
  },
  {
    path: 'sell',
    component: SellComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    data: { guest: true }
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    data: { guest: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
