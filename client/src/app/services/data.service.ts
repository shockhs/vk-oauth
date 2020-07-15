import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {AuthService, User} from "./auth.service";

export interface UserType {
  bdate: string,
  can_access_closed: boolean,
  first_name: string,
  id: number,
  is_closed: boolean,
  last_name: string
}

export interface FriendType {
  id: number,
  first_name: string,
  last_name: string,
  is_closed: boolean,
  can_access_closed: boolean,
  bdate: string,
  online: number,
  track_code: string

}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  user: User
  constructor(private http: HttpClient,private authService:AuthService) {
    this.user = this.authService.getCurrentUser
  }

  getUserData(): Observable<UserType> {
    return this.http.get<any>(`${environment.apiUrl}/api/auth/${this.user.userID}`,
      {headers: {responseType: 'application/json', authorization: this.user.authToken}})
      .pipe(tap(data => {
        return data
      }));
  }

  getFriendsData(): Observable<FriendType[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/auth/friends/${this.user.userID}`,
      {headers: {responseType: 'application/json', authorization: this.user.authToken}})
      .pipe(tap(data => {
        return data
      }));
  }
}
