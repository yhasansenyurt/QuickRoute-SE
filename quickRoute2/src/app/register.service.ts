import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url = `${baseUrl}auth/register`;

  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }

  saveUser(data) {
    return this.http.post(this.url, data);
  }
}
