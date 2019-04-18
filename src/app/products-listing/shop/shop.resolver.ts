import { IProduct } from 'src/app/models/IProduct';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ShopResolver implements Resolve<IProduct[]> {
    constructor(private service: ProductsService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IProduct[]> {
        return this.service.getShopProducts();
    }
}