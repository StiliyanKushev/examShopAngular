import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() source: any;

  isMine;
  isAdmin;

  constructor() {
  }

  ngOnInit() {
    this.isMine = this.source.creator === sessionStorage.getItem("username");
    this.isAdmin = sessionStorage.getItem("isAdmin");
  }
}
