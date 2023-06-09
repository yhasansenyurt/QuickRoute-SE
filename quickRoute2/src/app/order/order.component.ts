import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Package } from '../entities/package';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  token2: string;
  height: number;
  weight: number;
  isBreakable: boolean;
  userEmail: string; // Kullanıcının giriş yaptığı email'i tutacak değişken

  constructor(
    private orderService: OrderService,
    private authService: LoginService,
    private router: Router,
    private userService: UserService
  ) {}

  getPackagesFormData() {
    const token = localStorage.getItem('token');

    const userId = localStorage.getItem('customerId');

    // const userId = localStorage.getItem('id');

    const packageData: Package = {
      customerId: Number(userId),
      height: this.height,
      weight: this.weight,
      isBreakable: this.isBreakable,
    };

    this.orderService
      .savePackage(packageData, this.token2)
      .subscribe((data) => console.log(data));
    // this.orderService.savePackage(packageData).subscribe(
    //   {
    //     next: (response) => console.log(response),
    //     error: (error) => console.log(error),
    //   }
    //   );
  }

  // (response) => {
  //   console.log(userId);
  //   console.log(token);
  //   console.log('Package saved successfully', response);
  // },
  // (error) => {
  //   console.log(userId);
  //   console.log(token);
  //   console.error('Error saving package', error);
  // }
  completeOrder() {
    this.router.navigateByUrl('/order-card-page');
  }
}
