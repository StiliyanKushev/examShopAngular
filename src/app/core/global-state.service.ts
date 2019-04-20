import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  isAdmin = sessionStorage.getItem("isAdmin") || null;
  username = sessionStorage.getItem("username") || null;
  userToken = sessionStorage.getItem("userToken") || null;

  constructor() { }
}
