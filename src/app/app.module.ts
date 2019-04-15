import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsPagesModule } from './forms-pages/forms-pages.module';
import { ProductsListingModule } from './products-listing/products-listing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsPagesModule,
    ProductsListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
