package com.example.QuickRoute.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private Package packageItem;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User customer;

    @ManyToOne
    @JoinColumn(name = "courier_id")
    private User courier;

    @Column(nullable = false)
    private double fromLongitude;
    @Column(nullable = false)
    private double fromLatitude;
    @Column(nullable = false)
    private double toLongitude;
    @Column(nullable = false)
    private double toLatitude;
    @Column()
    private double distance; //siparis kac km uzakliga gidecek, bunu tutuyor.
    @Column()
    private LocalDateTime startDate;
    @Column()
    private LocalDateTime endDate;
    @Column(nullable = false)
    private Integer isAccepted; //Kurye siparisi kabul ettiyse 1 default 0.
    @Column(nullable = false)
    private Integer isDelivered; //Kurye siparisi teslim ettiyse 1 default 0.
    @Column()
    private double rating; //5 uzerinden rating verilecek.
}
