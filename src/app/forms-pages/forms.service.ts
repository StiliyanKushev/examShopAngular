import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { GlobalStateService } from '../global-state.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  BASE_URL = "http://localhost:9999";

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private router: Router,
    private globalState: GlobalStateService
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

  handleResponse(resBody, onSuccess) {
    if (resBody.success === true) {
      onSuccess();
      this.toast.success(`${resBody.message}`);
    }
    else {
      if (resBody.errors) {
        for (let err in resBody.errors) {
          this.toast.error(`${resBody.errors[err]}`);
        }
      }
      else if (resBody.message) {
        this.toast.error(`${resBody.message}`);
      }
    }
  }

  registerUser(data: any) {
    this.http.post(this.BASE_URL + "/auth/register", data, { headers: { 'Content-Type': "application/json" } })
      .subscribe(res => {
        this.handleResponse(res, () => {
          console.log("Handled register post");
          this.saveUserSession(res);
          this.router.navigateByUrl("/login");
        });
      });
  }

  loginUser(data: any) {
    this.http.post(this.BASE_URL + "/auth/login", data, { headers: { 'Content-Type': "application/json" } })
      .subscribe(res => {
        this.handleResponse(res, () => {
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
        this.handleResponse(res, () => {
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
