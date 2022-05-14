import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getMe(): Observable<any> {
    let token = localStorage.getItem('token');
    console.log('tokenherer', token);
    return this.http
      .get<any>(`${apiUrl}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(
        map((user) => {
          console.log('User get me >>>>>', user);
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          return user;
        })
      );
  }
}
