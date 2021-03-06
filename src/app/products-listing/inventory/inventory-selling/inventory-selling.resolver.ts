import { IProduct } from 'src/app/models/IProduct';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { InventoryService } from '../shared/inventory.service';

@Injectable({
    providedIn: 'root'
})

export class InventorySellingResolver implements Resolve<any> {
    constructor(private inventoryService: InventoryService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.inventoryService.getSelling();
    }
}