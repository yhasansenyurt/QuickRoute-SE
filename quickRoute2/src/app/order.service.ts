import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Package } from './entities/package';
import { User } from './entities/userdetails';
import { Token } from '@angular/compiler/src/ml_parser/tokens';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = `${baseUrl}package/create`;

  constructor(private http: HttpClient) {}

  savePackage(data: Package, token: String): Observable<Package> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http
      .post<Package>(this.url, data, { headers })
      .pipe(catchError(this.handleError('addHero', data)));
  }
  handleError(arg0: string, data: Package): any {
    throw new Error('...........  ........ . . . . . .');
  }

  // savePackage(data: Package): Observable<any> {
  //   console.log(data);
  // let headers = new HttpHeaders().set(
  //   'Authorization',
  //   `Bearer ${localStorage.getItem('token')}`
  // );
  //   return this.http.post<Package>(this.url, data, { headers });
  //   // return this.http.post(this.url, data);
  // }
}
