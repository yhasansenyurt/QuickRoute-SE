package com.example.QuickRoute.service.impl;

import com.example.QuickRoute.entity.Package;
import com.example.QuickRoute.repository.PackageRepository;
import com.example.QuickRoute.service.PackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PackageServiceImpl implements PackageService {

    private final PackageRepository packageRepository;

    @Override
    public Package createPackage(Package packageItem) {
        if(packageItem.getWeight() != 0.0
        && packageItem.getHeight() != 0.0 && packageItem.getIsBreakable() != null){
            packageRepository.save(packageItem);
        }

        return packageItem;
    }
}
