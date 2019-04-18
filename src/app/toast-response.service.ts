import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastResponseService {

  constructor(private toast: ToastrService) { }

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
}
