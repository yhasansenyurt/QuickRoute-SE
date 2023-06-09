package com.example.QuickRoute.service;

import com.example.QuickRoute.entity.Order;
import com.example.QuickRoute.entity.User;

import java.util.List;

public interface AdminService {

    List<User> getAllUsers();
    List<User> getAllCustomers();
    List<User> getAllCouriers();
    List<Order> getAllOrders();
}
