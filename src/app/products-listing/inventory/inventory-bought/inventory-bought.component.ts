import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory-bought',
  templateUrl: './inventory-bought.component.html',
  styleUrls: ['../inventory.component.css']
})
export class InventoryBoughtComponent implements OnInit {
  products: IProduct[];

  constructor(private toaster: ToastrService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      this.products = data.products;

      if (this.products.length == 0) {
        this.toaster.error(`There aren't any products in this part of the inventory`);
        this.router.navigateByUrl("/inventory");
      }
    });
  }
}
