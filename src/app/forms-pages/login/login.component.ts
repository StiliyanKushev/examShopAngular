import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../forms.css']
})
export class LoginComponent implements OnInit {

  constructor(private formService: FormsService) { }

  ngOnInit() {
  }

  onSubmit(formData: any) {
    this.formService.loginUser(formData);
  }

}
