package com.example.QuickRoute.service;

import com.example.QuickRoute.entity.AuthenticationRequest;
import com.example.QuickRoute.entity.AuthenticationResponse;
import com.example.QuickRoute.entity.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);


}
