package com.example.QuickRoute.repository;

import com.example.QuickRoute.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
