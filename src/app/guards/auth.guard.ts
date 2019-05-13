import { AuthService } from './../login/login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    if(this.auth.check()){
      this.auth.userAutenticate = true;
      this.auth.showNotLogin.emit(true);
      return true;
    }
    else{
    this.router.navigate(['/login']);
    this.auth.userAutenticate = false;
    this.auth.showNotLogin.emit(false);
    return false;
    }
  }
}
