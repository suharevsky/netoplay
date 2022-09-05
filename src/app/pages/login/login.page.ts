import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loading$: BehaviorSubject<boolean> = this.authService.loading$;

  constructor(
    private authService: AuthService,
    private formBuildder: FormBuilder,
    private errorService: ErrorService,
  ) {
    this.loginForm = this.formBuildder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void { }

  login(): void {
    this.authService.loading$.next(true);

    if (this.loginForm.status === "VALID") {
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;
      this.authService.login(email, password);
    } else {
      this.authService.loading$.next(false);
      this.errorService.show("Invalid credentials")
    }
  }
}
