import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users:User[];
  showExtended: boolean = true;
  loaded: boolean= false;
  enableAdd:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
      this.users=[
        {
          firstName: 'Rick',
          lastName: 'Sanchez',
          age: 20,
          address:{
            street: '50 Main st.',
            city: 'Boston',
            state: 'MA'
          },
          image:'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: 'Jerry',
          lastName: 'Sanchez',
          age: 21,
          address:{
            street: '51 Main st.',
            city: 'Boston',
            state: 'FL'
          },
          image:'http://lorempixel.com/600/600/people/2'
        },
        {
          firstName: 'Morty',
          lastName: 'Sanchez',
          age: 22,
          address:{
            street: '52 Main st.',
            city: 'Boston',
            state: 'OH'
          },
          image:'http://lorempixel.com/600/600/people/1'
        }
      ];

      this.loaded = true;

    
    
    // Add Addtional User
        this.adduser({
          firstName: 'Beth',
          lastName: 'Sanchez',
          
        })
    
  }
  adduser(user:User){
    this.users.push(user);
  }

}
