package com.example.QuickRoute.service;

import com.example.QuickRoute.entity.User;

import java.util.List;

public interface UserService {


    User getUserByUsername(String username);
    User updateUser(User user);
}
