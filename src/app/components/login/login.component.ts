import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

   //Método inverter valor showLogin
   invertShowLogin() {
    this.showLogin = !this.showLogin;
  }
  
}
