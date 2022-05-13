import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  signin(data: any) {
    console.log('DATA>>>', data);
    console.log(apiUrl);

    return this.http
      .post<any>(`${apiUrl}/auth/signin`, {
        ...data,
      })
      .pipe(
        map((user) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          console.log('USER>>>', user);
          return user;
        })
      );
  }

  signup(data: any) {
    console.log('DATA>>>', data);
    console.log(apiUrl);

    return this.http
      .post<any>(`${apiUrl}/auth/signup`, {
        ...data,
      })
      .pipe(
        map((user) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          console.log('USER>>>', user);
          return user;
        })
      );
  }
}
