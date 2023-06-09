package com.example.QuickRoute.service.impl;

import lombok.RequiredArgsConstructor;
import com.example.QuickRoute.entity.*;
import com.example.QuickRoute.repository.UserRepository;
import com.example.QuickRoute.service.AuthenticationService;
import com.example.QuickRoute.service.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    //REGISTER
    @Override
    public AuthenticationResponse register(RegisterRequest request) {
        Role role;
        if (request.getIsCourier() == 1){
            role = Role.COURIER;
        }
        else if(request.getIsCourier() == 0){
            role = Role.CUSTOMER;
        }
        else{
            role = Role.ADMIN;
        }
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phoneNumber(request.getPhoneNumber())
                .role(role)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


    //LOGIN
    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        //System.out.println(user.getRole() == Role.USER);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
