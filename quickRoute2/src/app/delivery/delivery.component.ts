import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  public contacts = [
    {
      name: '1test@gmail.com',
      phone: 'Height: 456 & Weight: 456',
    },
    {
      name: 'eemrekoca@gmail.com',
      phone: 'Height: 123 & Weight: 123',
    },
    {
      name: 'musteri@gmail.com',
      phone: 'Height: 321 & Weight 123',
    },
    {
      name: 'test@gmail.com',
      phone: 'Height: 752 & Weight: 135',
    },
    {
      name: 'ysf.senyurt@gmail.com',
      phone: 'Height: 554 & Weight: 134',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  orderTrack() {
    this.router.navigateByUrl('/order-card-page');
  }
}
