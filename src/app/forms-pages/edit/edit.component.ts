import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ProductsService } from 'src/app/products-listing/products.service';
import { IProduct } from 'src/app/models/IProduct';
import { GlobalStateService } from 'src/app/global-state.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../forms.css']
})
export class EditComponent implements OnInit {
  productId: string;
  source:any;

  constructor(private globalState: GlobalStateService, private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");

    this.route.url.subscribe((url: UrlSegment[]) => {
      let params = url[1].parameters;
      this.source = params;
    })
  }

  onSubmit(productData) {
    productData.creator = this.globalState.username;
    this.productService.editProduct(this.productId, productData);
  }
}
