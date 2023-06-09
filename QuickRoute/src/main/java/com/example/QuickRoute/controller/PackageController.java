package com.example.QuickRoute.controller;

import com.example.QuickRoute.entity.Package;
import com.example.QuickRoute.entity.User;
import com.example.QuickRoute.repository.UserRepository;
import com.example.QuickRoute.service.PackageService;
import com.example.QuickRoute.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/package")
@CrossOrigin()
public class PackageController {
    private final PackageService packageService;
    private final UserRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity<Package> createPackage(@RequestBody Package packageItem){

        return ResponseEntity.ok(packageService.createPackage(packageItem));
    }
}
