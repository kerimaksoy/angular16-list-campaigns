import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginObj: LoginModel = new LoginModel();
  errorMessage: string = '';
  
  constructor(private router: Router) {}

  ngOnInit() { 
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') 
    this.router.navigate(['/campaigns'])
  }
  
  onLogin(){
  if(this.loginObj.username == "admin" && this.loginObj.password == "1234") {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/campaigns']);
  }
  else
  this.errorMessage = 'Invalid username or password!';
  }
  
  }
  
  export class LoginModel {
    username: string;
    password: string;
  
    constructor() {
      this.username = "";
      this.password = "";
    }
}
