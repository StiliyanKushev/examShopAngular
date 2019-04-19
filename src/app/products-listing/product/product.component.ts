import { Component, OnInit, Input } from '@angular/core';
import { GlobalStateService } from 'src/app/global-state.service';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() source: any;
  @Input() dynamic: boolean;

  isMine;
  isAdmin;

  constructor(private router: Router, private globalState: GlobalStateService, private productService: ProductsService) {
  }

  ngOnInit() {
    this.isMine = this.source.creator === this.globalState.username;
    this.isAdmin = this.globalState.isAdmin === "true";
  }

  buy() {
    this.productService.buyProduct(this.source._id);
  }

  edit() {
    this.router.navigate([`/edit/${this.source._id}`, { title: this.source.title, imageUrl: this.source.imageUrl, description: this.source.description, price: this.source.price }]);
  }

  delete() {
    this.productService.deleteProduct(this.source._id);
  }
}
