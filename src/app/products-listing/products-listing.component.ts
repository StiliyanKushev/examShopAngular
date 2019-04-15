import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.css']
})
export class ProductsListingComponent implements OnInit {
  //todo: products type of Product[] *make an interface
  @Input() products: any;
  
  constructor() { }

  ngOnInit() {
  }

}
