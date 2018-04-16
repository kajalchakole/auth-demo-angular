import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurd implements CanActivate {

  canActivate(route, state : RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams : { returnUrl : state.url}});
    return false;
  }
  constructor(private router : Router, private authService : AuthService) { }

}
