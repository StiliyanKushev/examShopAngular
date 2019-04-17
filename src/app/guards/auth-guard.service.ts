import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router) {
  }

  canActivate(data): Observable<boolean> | Promise<boolean> | boolean {
    let guest = data.data.guest;
    if (guest && guest === true) {
      if (sessionStorage.getItem("userToken")) {
        this._router.navigate(['/home']);
        return false;
      }
      return true;
    }
    else {
      if (sessionStorage.getItem("userToken")) {
        return true;
      }
      this._router.navigate(['/login']);
      return false;
    }
  }
}
