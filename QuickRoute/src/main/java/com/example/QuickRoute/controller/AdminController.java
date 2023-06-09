package com.example.QuickRoute.controller;

import com.example.QuickRoute.entity.Order;
import com.example.QuickRoute.entity.User;
import com.example.QuickRoute.service.AdminService;
import com.example.QuickRoute.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
@CrossOrigin()
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/customers")
    public ResponseEntity<List<User>> getAllCustomers(){
        return ResponseEntity.ok(adminService.getAllCustomers());
    }

    @GetMapping("/couriers")
    public ResponseEntity<List<User>> getAllCouriers(){
        return ResponseEntity.ok(adminService.getAllCouriers());
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrders(){
        return ResponseEntity.ok(adminService.getAllOrders());
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(adminService.getAllUsers());
    }
}
