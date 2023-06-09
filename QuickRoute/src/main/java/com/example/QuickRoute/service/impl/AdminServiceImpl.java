package com.example.QuickRoute.service.impl;

import com.example.QuickRoute.entity.Order;
import com.example.QuickRoute.entity.Role;
import com.example.QuickRoute.entity.User;
import com.example.QuickRoute.repository.OrderRepository;
import com.example.QuickRoute.repository.UserRepository;
import com.example.QuickRoute.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<User> getAllCustomers() {
        List<User> users = userRepository.findAll();
        List<User> customers = new ArrayList<>();
        for(User user: users){
            if(user.getRole() == Role.CUSTOMER){
                customers.add(user);
            }
        }
        return customers;
    }

    @Override
    public List<User> getAllCouriers() {
        List<User> users = userRepository.findAll();
        List<User> couriers = new ArrayList<>();
        for(User user: users){
            if(user.getRole() == Role.COURIER){
                couriers.add(user);
            }
        }
        return couriers;
    }

    @Override
    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }
}
