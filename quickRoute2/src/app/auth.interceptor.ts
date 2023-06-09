// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HTTP_INTERCEPTORS,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { LoginService } from './login.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: LoginService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     req = req.clone({
//       headers: req.headers.set('authorization', this.authService.getToken()),
//     });
//     return next.handle(req);
//   }
// }

// export const AuthInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: AuthInterceptor,
//   multi: true,
// };
