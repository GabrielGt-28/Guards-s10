import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private settings: SettingsService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hasUser()) {
      return true;
    }

    //redirect Login

    alert('No tienes acceso.');
    this.router.navigate(['/login']);
    return false;
  }

  hasUser(): boolean {
    return true;
    // return this.settings.getPermit();
  }
}
