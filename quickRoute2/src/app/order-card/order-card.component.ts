import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  trackPackage() {
    this.router.navigateByUrl('/order-tracking-page');
  }
}
