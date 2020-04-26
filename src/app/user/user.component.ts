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

// Inject Dependencies within paranthesis
  constructor() { 
    console.log("Hello user - from Constructor")
    
    // Have to call defined methods here !!
      this.sayHello();
      console.log('Before Birthday: '+this.age);
      
      this.hasBirthday();
      console.log('After Birthday: '+this.age);
  }
// Life cycle Method - Ajax calls + Service Calls 
  ngOnInit(): void {

  }
// some methods:
  sayHello(){
    console.log(`Hello this is ${this.firstName} ${this.lastName}`)
  }
  hasBirthday(){
    this.age +=1;
  }
}
