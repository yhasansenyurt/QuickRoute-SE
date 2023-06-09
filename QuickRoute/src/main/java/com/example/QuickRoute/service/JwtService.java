package com.example.QuickRoute.service;

import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Map;
import java.util.function.Function;

public interface JwtService {
    public String extractUsername(String jwt);
    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver);
    public String generateToken(UserDetails userDetails);

    public String generateToken(Map<String, Object> extraClaims,
                                UserDetails userDetails);
    public boolean isTokenValid(String token, UserDetails userDetails);

}
