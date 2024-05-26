import { Injectable } from '@angular/core';
import { Login, LoginResponse } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../assets/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(data: Login): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/login', data)
  }

  verifySession() {
    return this.http.get(environment.apiUrl + '/auth/verify')
  }
}
