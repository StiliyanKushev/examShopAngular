import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalStateService } from 'src/app/global-state.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  BASE_URL = "http://localhost:9999";

  constructor(private http: HttpClient,private globalState: GlobalStateService) { }

  getSold() {
    console.log("inventory SOLD");
    return this.http.get(this.BASE_URL + "/feed/products/sold",{headers: { "Content-Type": "application/json", token: this.globalState.userToken, username: this.globalState.username }});
  }

  getBought() {
    console.log("inventory BOUGHT");
    return this.http.get(this.BASE_URL + "/feed/products/bought",{headers: { "Content-Type": "application/json", token: this.globalState.userToken, username: this.globalState.username }});
  }

  getSelling() {
    console.log("inventory SELLING");
    return this.http.get(this.BASE_URL + "/feed/products/selling",{headers: { "Content-Type": "application/json", token: this.globalState.userToken, username: this.globalState.username }});
  }
}
