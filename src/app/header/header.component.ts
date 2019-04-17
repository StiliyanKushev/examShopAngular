import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms-pages/forms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private formService: FormsService) { }

  ngOnInit() {
  }

  logout(){
    this.formService.logoutUser();
  }

  get UserName(){
    return sessionStorage.getItem("username");
  }
}
