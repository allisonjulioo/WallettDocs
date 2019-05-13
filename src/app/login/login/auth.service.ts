import { Router } from '@angular/router';
import { Injectable, EventEmitter, Injector, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

import { User } from './../user'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService implements ErrorHandler {
  public userAutenticate: boolean = false;
  showNotLogin = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient, private injector: Injector) { }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credentials: { cpf: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
      .pipe(map(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', btoa(JSON.stringify(data.user)));
      }));
  }

  logout(): void {
    localStorage.clear();
    this.http.get(`${environment.api_url}/auth/logout`).subscribe(resp => {
      this.router.navigate(['login']);
      this.userAutenticate = false;
    });
  }


  getUser(): User {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

   
  userAreAutenticate() {
    return this.userAutenticate;
  }

  handleError(error) {
    const router = this.injector.get(Router);
    if (error.rejection.status === 401 || error.rejection.status === 403) {
      router.navigate(['/login']);
    }
    
    throw error;
  }

}
