package com.example.QuickRoute.controller;

import com.example.QuickRoute.entity.Order;
import com.example.QuickRoute.entity.User;
import com.example.QuickRoute.service.OrderService;
import com.example.QuickRoute.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin()
public class UserController {

    private final UserService userService;
    private final OrderService orderService;

    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username){
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }

    @PutMapping("/update_user")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return ResponseEntity.ok(userService.updateUser(user));
    }

    //Customer icin myorders request.
    @GetMapping("/my_orders_customer/{userId}")
    public ResponseEntity<List<Order>> getMyOrdersCustomer(@PathVariable Long userId){
        return ResponseEntity.ok(orderService.getMyDeliveredOrdersCustomer(userId));
    }

    //Kurye icin myorders request.
    @GetMapping("/my_orders_courier/{courierId}")
    public ResponseEntity<List<Order>> getMyOrdersCourier(@PathVariable Long courierId){
        return ResponseEntity.ok(orderService.getMyDeliveredOrdersCourier(courierId));
    }

}
