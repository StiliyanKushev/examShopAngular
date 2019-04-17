import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GlobalStateService } from '../global-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router,private globalState: GlobalStateService) {
  }

  canActivate(data): Observable<boolean> | Promise<boolean> | boolean {
    let guest = data.data.guest;
    if (guest && guest === true) {
      if (this.globalState.userToken) {
        this._router.navigate(['/home']);
        return false;
      }
      return true;
    }
    else {
      if (this.globalState.userToken) {
        return true;
      }
      this._router.navigate(['/login']);
      return false;
    }
  }
}
