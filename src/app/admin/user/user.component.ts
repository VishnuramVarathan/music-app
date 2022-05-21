import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  age : number = 20;
  name : string = "Sai";
  isMajor : boolean = true;
  currDate : Date = new Date();
  
  isShow : boolean = false;
  selectedState : string="";
  checkAge : number = 0;

  states : string[] = [];
  constructor() { }

  ngOnInit(): void {

    this.states = ["TN", "KL", "AP", "KA"];
  }

  getStateName(st : string)
  {
    let stateNames = [{"key":"TN", "value":"TamilNadu"},
                  {"key":"KL", "value":"Kerla"},
                  {"key":"AP", "value":"Andra"},
                  {"key":"KA", "value":"Karnataka"}];
    let result = "";
    for(let state of stateNames)
    {
      if(state.key==st)
      {
        result = state.value;
        break;
      }  
    }
    return result;
    
  }

}
