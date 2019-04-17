import { Component, OnInit, Input } from '@angular/core';
import { GlobalStateService } from 'src/app/global-state.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() source: any;

  isMine;
  isAdmin;

  constructor(private globalState: GlobalStateService) {
  }

  ngOnInit() {
    this.isMine = this.source.creator === this.globalState.username;
    this.isAdmin = this.globalState.isAdmin === "true";
  }
}
