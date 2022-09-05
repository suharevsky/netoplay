import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public router: Router,
    public authService: AuthService,
  ) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['login'])
    }
    return true;
  }
}