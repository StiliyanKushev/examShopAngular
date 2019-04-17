import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms-pages/forms.service';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private formService: FormsService,private globalState: GlobalStateService) { }

  ngOnInit() {
  }

  logout(){
    this.formService.logoutUser();
  }

  get UserName(){
    return this.globalState.username;
  }
}
