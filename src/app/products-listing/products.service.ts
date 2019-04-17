import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = "http://localhost:9999";

  constructor(private http: HttpClient) { }

  getHomeProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.BASE_URL + "/feed/products/latest");
  }

  getShopProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.BASE_URL + "/feed/products");
  }
}
