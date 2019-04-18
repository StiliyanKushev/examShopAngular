import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';
import { GlobalStateService } from '../global-state.service';
import { Router } from '@angular/router';
import { ToastResponseService } from '../toast-response.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = "http://localhost:9999";

  constructor(private toastify: ToastResponseService, private router: Router, private http: HttpClient, private globalState: GlobalStateService) { }

  getHomeProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.BASE_URL + "/feed/products/latest");
  }

  getShopProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.BASE_URL + "/feed/products");
  }

  buyProduct(id) {
    if (this.globalState.username === null) {
      this.router.navigateByUrl("/login");
    }
    else {
      this.http.post(this.BASE_URL + "/feed/product/buy/" + id, JSON.stringify({ username: this.globalState.username }), { headers: { "Content-Type": "application/json", token: this.globalState.userToken } })
        .subscribe(res => {
          this.toastify.handleResponse(res, () => {
            //this is just to reload the data in the shop and it will not load the home data
            //becouse of how router works ^^
            this.router.navigateByUrl("/");
            this.router.navigateByUrl("/shop");
          });
        });
    }
  }

  editProduct(id, data) {
    if (this.globalState.username === null) {
      this.router.navigateByUrl("/login");
    }
    else {
      this.http.post(this.BASE_URL + "/feed/product/edit/" + id, JSON.stringify(data), { headers: { "Content-Type": "application/json", token: this.globalState.userToken } })
        .subscribe(res => {
          this.toastify.handleResponse(res, () => {
            //this is just to reload the data in the shop and it will not load the home data
            //becouse of how router works ^^
            this.router.navigateByUrl("/");
            this.router.navigateByUrl("/shop");
          });
        });
    }
  }

  deleteProduct(id) {
    if (this.globalState.username === null) {
      this.router.navigateByUrl("/login");
    }
    else {
      this.http.post(this.BASE_URL + "/feed/product/remove/" + id, JSON.stringify({ username: this.globalState.username }), { headers: { "Content-Type": "application/json", token: this.globalState.userToken } })
        .subscribe(res => {
          this.toastify.handleResponse(res, () => {
            //this is just to reload the data in the shop and it will not load the home data
            //becouse of how router works ^^
            this.router.navigateByUrl("/");
            this.router.navigateByUrl("/shop");
          });
        });
    }
  }
}
