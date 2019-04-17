import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsListingComponent } from './products-listing.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, ProductsListingComponent, ProductComponent, ShopComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProductsListingModule { }
