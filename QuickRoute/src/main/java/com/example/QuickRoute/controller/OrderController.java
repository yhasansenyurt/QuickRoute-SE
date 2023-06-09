package com.example.QuickRoute.controller;

import com.example.QuickRoute.entity.Order;
import com.example.QuickRoute.entity.User;
import com.example.QuickRoute.repository.OrderRepository;
import com.example.QuickRoute.repository.UserRepository;
import com.example.QuickRoute.service.OrderService;
import com.example.QuickRoute.service.UserService;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/order")
@CrossOrigin()
public class OrderController {
    private final OrderService orderService;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(@RequestBody Order order){
        User customer = userRepository.findById(order.getCustomer().getId()).get();
        order.setCustomer(customer);
        return ResponseEntity.ok(orderService.createOrder(order));
    }

    @GetMapping("/active_orders/{courierId}")
    public ResponseEntity<List<Order>> getActiveOrdersCourier(@PathVariable Long courierId){
        return ResponseEntity.ok(orderService.getActiveOrdersCourier(courierId));
    }

    @PutMapping("/accept/{courierId}")
    public ResponseEntity<Order> acceptOrderCourier(@RequestBody Order order, @PathVariable Long courierId){
        Order order1 = orderRepository.findById(order.getId()).get();
        return ResponseEntity.ok(orderService.acceptOrderCourier(order1,courierId));
    }

    @GetMapping("/in_delivery/{customerId}")
    public ResponseEntity<List<Order>> inDeliveryOrderCustomer(@PathVariable Long customerId){
        return ResponseEntity.ok(orderService.inDeliveryOrderCustomer(customerId));
    }

    @PutMapping("/deliver")
    public ResponseEntity<Order> deliverOrderCourier(@RequestBody Order order){
        Order order1 = orderRepository.findById(order.getId()).get();
        return ResponseEntity.ok(orderService.deliverOrderCourier(order1));
    }

    @PutMapping("/rating/{rating}")
    public ResponseEntity<Order> rateOrderCustomer(@RequestBody Order order, @PathVariable double rating){
        Order order1 = orderRepository.findById(order.getId()).get();
        return ResponseEntity.ok(orderService.rateOrderCustomer(order,rating));
    }
}
