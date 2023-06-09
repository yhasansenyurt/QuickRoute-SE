import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

interface LoginResponse {
  token: string;
  customer: {
    id: number;
  };
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private token: string;
  private id: number;

  constructor(private http: HttpClient) {}

  login(data): Observable<any> {
    console.log('SERVER');

    return this.http
      .post<LoginResponse>(`${baseUrl}auth/authenticate`, data)
      .pipe(
        tap((result: LoginResponse) => {
          console.log(result);
          if (result && result.token && result.customer && result.customer.id) {
            this.setToken(result.token);
            this.setCustomerId(result.customer.id);
          }
        })
      );
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  setCustomerId(customerId: number): void {
    this.id = customerId;
  }

  getCustomerId(): number {
    return this.id;
  }
}
