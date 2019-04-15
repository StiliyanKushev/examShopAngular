import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = [
    {
      title: "Car",
      creator: "Pesho",
      price: 2100,
      description: "A very fast car with 6 doors.",
      imageUrl: "https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg"
    },
    {
      title: "Car",
      creator: "Pesho",
      price: 2100,
      description: "A very fast car with 6 doors.",
      imageUrl: "https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
