import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../forms.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formService: FormsService,
    private router: Router
  ){}

  ngOnInit() {
  }

  onSubmit(formData:any){
    this.formService.registerUser(formData);
    this.router.navigate(['/home']);
  }

}
