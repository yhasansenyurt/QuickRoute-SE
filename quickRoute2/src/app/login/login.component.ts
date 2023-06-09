import { UserService } from '../user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private authService: LoginService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      accountType: new FormControl('customer'),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe((result) => {
        if (result && result.token) {
          const accountType = this.formGroup.controls['accountType'].value;
          let route = '';

          if (accountType === 'customer') {
            route = '/order-page';
          } else if (accountType === 'couirer') {
            route = '/delivery-page';
          }

          this.authService.setToken(result.token);

          const email = this.formGroup.controls['email'].value;
          this.userService.getUserByEmail(email, result.token).subscribe(
            (user) => {
              console.log('Kullanıcı ID:', user.id);
              console.log('Kullanıcı Adı:', user.firstName);

              if (user && user.id) {
                localStorage.setItem('customerId', user.id.toString());
                localStorage.setItem('token', result.token);
              }
              console.log(localStorage.getItem('token'));
              console.log(localStorage.getItem('customerId'));

              // localStorage.setItem('token', 'xhja787');
              // localStorage.getItem('token');

              this.router.navigateByUrl(route);
            },
            (error) => {
              console.error('Kullanıcı bilgileri alınamadı:', error);
            }
          );
        } else {
          console.warn('Login failed');
        }
      });
    }
  }
}
