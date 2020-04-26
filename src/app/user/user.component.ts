import { Component, OnInit } from '@angular/core';
import {User} from '../models/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Properties
  user: User

// Inject Dependencies within paranthesis (Bring in Data Service)
  constructor() { 
  this.user={
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 20,
    address:{
      street: '50 Main st.',
      city: 'Boston',
      state: 'MA'
    }
  }

  }
// Life cycle Method - Ajax calls + Service Calls 
  ngOnInit(): void {

  }

}
