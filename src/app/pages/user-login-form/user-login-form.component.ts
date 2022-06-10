import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {
  //Declarando variáveis
  showLoginChild: boolean;

  @ViewChild(LoginComponent)
  login: LoginComponent;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  //Método 
  ngAfterViewInit() {
    this.showLoginChild = this.login.showLogin;

    this.cdRef.detectChanges();
  }

}
