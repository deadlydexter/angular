import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Properties
  firstName = 'John';
  lastName = 'Smith';
  age = 20;

// Inject Dependencies
  constructor() { 
    console.log("Hello user")
    this.sayHello();
    console.log('before '+this.age);
    this.hasBirthday();
    console.log('After '+this.age);
  }
// Life cycle Method - Ajax calls 
  ngOnInit(): void {

  }

  sayHello(){
    console.log(`Hello ${this.firstName}`)
  }
  hasBirthday(){
    this.age +=1;
  }
}
