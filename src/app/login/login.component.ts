import { Component, OnInit } from '@angular/core';  
import { User } from './user';

@Component({
  selector: 'it-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User = new User();  
 

  constructor( ) { }
 

  public ngOnInit() { 
  }
 
}
