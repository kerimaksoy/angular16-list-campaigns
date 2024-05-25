import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginObj: LoginModel = new LoginModel();
errorMessage: string = '';

constructor(private router: Router) {}

onLogin(){
if(this.loginObj.username == "admin" && this.loginObj.password == "1234") {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/dashboard']);
}
else
this.errorMessage = 'Invalid username or password';
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
