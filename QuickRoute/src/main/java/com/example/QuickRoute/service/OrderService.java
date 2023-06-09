package com.example.QuickRoute.service;

import com.example.QuickRoute.entity.Order;

import java.util.List;

public interface OrderService {

    Order createOrder(Order order);
    List<Order> getMyDeliveredOrdersCustomer(Long userId);
    List<Order> getMyDeliveredOrdersCourier(Long userId);
    List<Order> getActiveOrdersCourier(Long courierId);
    Order acceptOrderCourier(Order order, Long courierId);
    List<Order> inDeliveryOrderCustomer(Long customerId);
    Order deliverOrderCourier(Order order);
    Order rateOrderCustomer(Order order, double rating);
}
