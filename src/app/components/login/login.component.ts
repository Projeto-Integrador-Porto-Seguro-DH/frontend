import { AlertService } from './../../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AuthService } from './../../services/auth.service';
import { UserLogin } from 'src/app/model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin = new UserLogin();

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.authService
      .login(this.userLogin)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
          this.alertService.alertSuccess('Usuário logado com sucesso!');
        },
        error: (error) => {
          this.error = error;
          console.log(this.error);
          this.alertService.alertError(this.error);
          this.loading = false;
        },
      });
  }
}
