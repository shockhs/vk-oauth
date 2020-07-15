import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface User {
  userID: string;
  authToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  get getCurrentUser():User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  get isLoggedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser !== null;
  }

  constructor(private http: HttpClient) {}

  login(code: string): Observable<User> {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/login`, {code},
      {headers: {responseType: 'application/json'}})
      .pipe(tap(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  logout() {
      localStorage.removeItem('currentUser')
  }
}
