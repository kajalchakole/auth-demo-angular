import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';

@Injectable()
export class AdminAuthGaurd implements CanActivate{

  canActivate(routes: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | PromiseObservable<boolean> | Promise<boolean> {
    let user = this.authService.currentUser;
    if(user && user.admin) return true;

    this.router.navigate(['/no-access']);
    return false;

  }
  constructor(private router: Router, private authService: AuthService) { }

}
