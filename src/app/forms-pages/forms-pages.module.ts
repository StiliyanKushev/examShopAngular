import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SellComponent, EditComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FormsPagesModule { }
