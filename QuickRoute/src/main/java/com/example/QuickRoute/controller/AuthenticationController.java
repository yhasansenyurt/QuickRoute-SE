package com.example.QuickRoute.controller;

import lombok.RequiredArgsConstructor;
import com.example.QuickRoute.entity.AuthenticationRequest;
import com.example.QuickRoute.entity.AuthenticationResponse;
import com.example.QuickRoute.entity.RegisterRequest;
import com.example.QuickRoute.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin()
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){

        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody AuthenticationRequest request){

        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}