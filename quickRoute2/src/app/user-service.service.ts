import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './entities/userdetails';
import { baseUrl, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = `${baseUrl}package/create`;

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string, token: string): Observable<User> {
    const url = `${baseUrl}user/${email}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(url, { headers });
  }
}
