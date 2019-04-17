import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['../forms.css']
})
export class SellComponent implements OnInit {

  constructor(private formService:FormsService) { }

  ngOnInit() {
  }

  onSubmit(formData:any){
    this.formService.sell(formData);
  }

}
