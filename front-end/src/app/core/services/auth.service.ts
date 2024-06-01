import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../assets/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '@app/shared/interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(data: Login): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/auth/login', data)
  }

  verifySession(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/auth/verify')
  }

  logout(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/auth/logout')
  }
}
