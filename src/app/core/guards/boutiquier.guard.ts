import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class boutiquierGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo = this.authService.getUserInfo();
    if (userInfo && userInfo.role==='boutiquier') {
      return true;
    } else {
      this.router.navigate(['/not-found']);
      return false;
    }
  }
}