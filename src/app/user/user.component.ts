import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any; //can be a mix of data types
  myTuple: [string, number, boolean];
  unusable:void;
  u:undefined;
  n:null;

// Inject Dependencies within paranthesis (Bring in Data Service)
  constructor() { 
    this.firstName = "Rick",
    this.lastName = "Sanchez",
    this.age = 20;

    this.address  = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }

    this.hasKids = true;
    this.numberArray = [1,2,3];
    this.stringArray = ['a','b','c'];
    this.mixedArray = [1,2,'a',true];
    this.myTuple = ['abc', 2 , true ];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
    console.log(this.addNumbers(2,4))
  }
// Life cycle Method - Ajax calls + Service Calls 
  ngOnInit(): void {

  }
  showAge(){
    return this.age;
  }

  addNumbers(num1:number, num2:number):number{
  return num1+num2
  }
}
