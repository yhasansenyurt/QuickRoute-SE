package com.example.QuickRoute.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstName;
    private String lastName;
    private Integer isCourier; //Kuryeyse 1 musteriyse 0 degeri alacak.
    private String phoneNumber;
    private String email;
    private String password;
}
