import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Properties
  firstName = 'Rick';
  lastName = 'Sanchez';
  age = 20;
  address = {
    street: '50 Main St',
    city: 'Boston',
    state: 'MA'
  }

// Inject Dependencies within paranthesis (Bring in Data Service)
  constructor() { 

  }
// Life cycle Method - Ajax calls + Service Calls 
  ngOnInit(): void {

  }
  showAge(){
    return this.age;
  }
}
