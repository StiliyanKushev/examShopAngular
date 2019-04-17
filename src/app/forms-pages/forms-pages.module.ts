import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SellComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FormsPagesModule { }
