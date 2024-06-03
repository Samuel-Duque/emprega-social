import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../assets/environments/environment';
import { Observable, catchError, first, map, of } from 'rxjs';
import { Login } from '@app/shared/interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string = '';

  constructor(private http: HttpClient) {}

  signIn(data: Login): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/auth/login', data);
  }

  signUp(data: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/auth/register', data);
  }

  verifySession(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/auth/verify');
  }

  logout(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/auth/logout');
  }

  setRole(role: string) {
    this.role = role;
  }

  getRole(): Observable<string> {
    // console.log('getRole', this.role, "dd");

    if (this.role) {
      // console.log('setRole => role', this.role);
      return of(this.role);
    }

    return this.verifySession().pipe(
      first(),
      map((response) => {
        this.role = response.role;
        this.setRole(this.role);
        return this.role;
      }),
      catchError(() => {
        this.role = '';
        this.setRole(this.role);
        return of(this.role);
      })
    );
  }
}
