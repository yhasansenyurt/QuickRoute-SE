import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { CourierOrderComponent } from './courier-order/courier-order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderTrackingMapComponent } from './order-tracking-map/order-tracking-map.component';
import { DeliveryMapComponent } from './delivery-map/delivery-map.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'customer-page', component: CustomerPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'register-page', component: RegisterComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'order-page', component: OrderComponent },
  { path: 'couirer-page', component: CourierOrderComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'delivery-page', component: DeliveryComponent },
  { path: 'order-card-page', component: OrderCardComponent },
  { path: 'order-tracking-page', component: OrderTrackingMapComponent },
  { path: 'delivery-map-page', component: DeliveryMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
