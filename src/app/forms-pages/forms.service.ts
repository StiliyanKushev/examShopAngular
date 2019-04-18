import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { GlobalStateService } from '../global-state.service';
import { ToastResponseService } from '../toast-response.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  BASE_URL = "http://localhost:9999";

  constructor(
    private http: HttpClient,
    private router: Router,
    private globalState: GlobalStateService,
    private toastify: ToastResponseService
  ) { }

  saveUserSession(resBody) {
    sessionStorage.setItem("username", resBody.user.username);
    sessionStorage.setItem("userToken", resBody.token);
    sessionStorage.setItem("isAdmin", (resBody.user.roles.indexOf("Admin") !== -1).toString());

    this.globalState.userToken = resBody.token;
    this.globalState.username = resBody.user.username;
    this.globalState.isAdmin = (resBody.user.roles.indexOf("Admin") !== -1).toString();
  }
  removeUserSession() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("isAdmin");

    this.globalState.userToken = null;
    this.globalState.username = null;
    this.globalState.isAdmin = null;
  }

  registerUser(data: any) {
    this.http.post(this.BASE_URL + "/auth/register", data, { headers: { 'Content-Type': "application/json" } })
      .subscribe(res => {
        this.toastify.handleResponse(res, () => {
          console.log("Handled register post");
          this.router.navigateByUrl("/login");
        });
      });
  }

  loginUser(data: any) {
    this.http.post(this.BASE_URL + "/auth/login", data, { headers: { 'Content-Type': "application/json" } })
      .subscribe(res => {
        this.toastify.handleResponse(res, () => {
          console.log("Handled login post");
          this.saveUserSession(res);
          this.router.navigateByUrl("/home");
        });
      });
  }

  sell(data: any) {
    data.price = data.price.toString();
    data.creator = this.globalState.username;
    this.http.post(this.BASE_URL + "/feed/product/create", data, { headers: { "Content-Type": "application/json", token: this.globalState.userToken } })
      .subscribe(res => {
        this.toastify.handleResponse(res, () => {
          console.log("Handled sell post");
          this.router.navigateByUrl("/home");
        });
      });
  }

  logoutUser() {
    this.removeUserSession();
    this.router.navigateByUrl("/home");
  }
}
