import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { CourierOrderComponent } from './courier-order/courier-order.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxListModule,
  IgxRippleModule,
  IgxButtonModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxCheckboxModule,
} from 'igniteui-angular';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderTrackingMapComponent } from './order-tracking-map/order-tracking-map.component';
import { DeliveryMapComponent } from './delivery-map/delivery-map.component';
import { UserService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CustomerPageComponent,
    CartPageComponent,
    RegisterComponent,
    LoginComponent,
    OrderComponent,
    CourierOrderComponent,
    MapContainerComponent,
    DeliveryComponent,
    OrderCardComponent,
    OrderTrackingMapComponent,
    DeliveryMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IgxRippleModule,
    IgxListModule,
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
