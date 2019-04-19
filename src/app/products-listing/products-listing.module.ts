import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsListingComponent } from './products-listing.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from './inventory/inventory.component';
import { InventorySellingComponent } from './inventory/inventory-selling/inventory-selling.component';
import { InventorySoldComponent } from './inventory/inventory-sold/inventory-sold.component';
import { InventoryBoughtComponent } from './inventory/inventory-bought/inventory-bought.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InventoryComponent,HomeComponent, ProductsListingComponent, ProductComponent, ShopComponent, InventorySellingComponent, InventorySoldComponent, InventoryBoughtComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductsListingModule { }
