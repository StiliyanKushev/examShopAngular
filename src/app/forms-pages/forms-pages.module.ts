import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SellComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class FormsPagesModule { }
