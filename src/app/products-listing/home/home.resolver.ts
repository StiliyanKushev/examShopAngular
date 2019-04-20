import { IProduct } from 'src/app/models/IProduct';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../shared/products.service';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HomeResolver implements Resolve<IProduct[]> {
    constructor(private service: ProductsService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IProduct[]> {
        return this.service.getHomeProducts();
    }
}