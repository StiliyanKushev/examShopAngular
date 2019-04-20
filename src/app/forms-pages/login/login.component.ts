import { Component, OnInit } from '@angular/core';
import { FormsService } from '../shared/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/forms.css']
})
export class LoginComponent implements OnInit {

  constructor(private formService: FormsService) { }

  ngOnInit() {
  }

  onSubmit(formData: any) {
    this.formService.loginUser(formData);
  }

}
