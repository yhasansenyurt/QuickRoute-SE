package com.example.QuickRoute.service.impl;

import com.example.QuickRoute.entity.Order;
import com.example.QuickRoute.entity.Package;
import com.example.QuickRoute.entity.User;
import com.example.QuickRoute.repository.OrderRepository;
import com.example.QuickRoute.repository.PackageRepository;
import com.example.QuickRoute.repository.UserRepository;
import com.example.QuickRoute.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.math3.util.Precision;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final PackageRepository packageRepository;
    private final UserRepository userRepository;

    private static final double r2d = 180.0D / 3.141592653589793D;
    private static final double d2r = 3.141592653589793D / 180.0D;
    private static final double d2km = 111189.57696D * r2d;

    @Override
    public Order createOrder(Order order) {
        List<Package> allPackages = packageRepository.findAll();
        Package lastPackage = allPackages.get(allPackages.size()-1);
        order.setPackageItem(lastPackage);
        order.setCourier(null);
        order.setIsAccepted(0);
        order.setIsDelivered(0);


        double lat1 = order.getFromLatitude();
        double lat2 = order.getToLatitude();
        double lon1 = order.getFromLongitude();
        double lon2 = order.getToLongitude();

        double x = lat1 * d2r;
        double y = lat2 * d2r;
        double distance = Math.acos( Math.sin(x) * Math.sin(y) + Math.cos(x) * Math.cos(y)
                * Math.cos(d2r * (lon1 - lon2))) * d2km;
        distance = distance / 1000; //m to km
        distance = Precision.round(distance, 3);
        order.setDistance(distance);

        orderRepository.save(order);
        return order;
    }

    @Override
    public List<Order> getMyDeliveredOrdersCustomer(Long userId) {
        List<Order> allOrders = orderRepository.findAll();
        List<Order> myOrders = new ArrayList<>();

        for(Order order: allOrders){
            if(order.getCustomer().getId().equals(userId) && order.getIsDelivered() == 1){
                myOrders.add(order);
            }
        }
        return myOrders;
    }

    @Override
    public List<Order> getMyDeliveredOrdersCourier(Long userId) {
        List<Order> allOrders = orderRepository.findAll();
        List<Order> myOrders = new ArrayList<>();

        for(Order order: allOrders){
            if(order.getCourier() != null && order.getCourier().getId().equals(userId) && order.getIsDelivered() == 1){
                myOrders.add(order);
            }
        }
        return myOrders;
    }

    @Override
    public List<Order> getActiveOrdersCourier(Long courierId) {
        // 10 kmnin altindaki siparisleri listeleyecek.
        List<Order> allOrders = orderRepository.findAll();
        List<Order> activeOrders = new ArrayList<>();

        User courier = userRepository.findById(courierId).get();
        double lat2 = courier.getLatitude();
        double lon2 = courier.getLongitude();

        for(Order order: allOrders){
            if(order.getIsAccepted() == 0) {


                double lat1 = order.getFromLatitude();
                double lon1 = order.getFromLongitude();

                double x = lat1 * d2r;
                double y = lat2 * d2r;
                double distance = Math.acos(Math.sin(x) * Math.sin(y) + Math.cos(x) * Math.cos(y)
                        * Math.cos(d2r * (lon1 - lon2))) * d2km;
                distance = distance / 1000; //m to km
                distance = Precision.round(distance, 3);

                if (distance <= 10) {
                    activeOrders.add(order);
                }
            }

        }

        return activeOrders;
    }

    @Override
    public Order acceptOrderCourier(Order order, Long courierId) {
        Order existingOrder = orderRepository.findById(order.getId()).get();
        User courier = userRepository.findById(courierId).get();
        existingOrder.setCourier(courier);
        existingOrder.setStartDate(LocalDateTime.now());
        existingOrder.setIsAccepted(1);
        orderRepository.save(existingOrder);
        return existingOrder;
    }

    @Override
    public List<Order> inDeliveryOrderCustomer(Long customerId) {
        List<Order> allOrders = orderRepository.findAll();
        List<Order> inDeliveryOrders = new ArrayList<>();
        for(Order order: allOrders){
            if(customerId.equals(order.getCustomer().getId()) && order.getIsAccepted() == 1 && order.getIsDelivered() == 0){
                inDeliveryOrders.add(order);
            }
        }
        return inDeliveryOrders;
    }

    @Override
    public Order deliverOrderCourier(Order order) {
        Order existingOrder = orderRepository.findById(order.getId()).get();
        existingOrder.setIsDelivered(1);
        existingOrder.setEndDate(LocalDateTime.now());
        orderRepository.save(existingOrder);
        return existingOrder;
    }

    @Override
    public Order rateOrderCustomer(Order order, double rating) {
        Order existingOrder = orderRepository.findById(order.getId()).get();
        existingOrder.setRating(rating);
        orderRepository.save(existingOrder);

        User courier = userRepository.findById(existingOrder.getCourier().getId()).get();
        List<Order> allOrders = orderRepository.findAll();
        int order_count = 0;
        double new_rating_average = 0;
        for(Order order1: allOrders){
            if(order1.getCourier()!= null && order1.getCourier().getId().equals(courier.getId())){
                if(order1.getRating() != 0 && order1.getIsDelivered() == 1){
                    order_count++;
                }
            }
        }
        if(courier.getRatingAverage() != 0){
            new_rating_average = (((order_count-1) * courier.getRatingAverage()) + rating) / order_count;
        }
        else{
            new_rating_average = rating;
        }
        courier.setRatingAverage(new_rating_average);
        userRepository.save(courier);

        return existingOrder;
    }


}
