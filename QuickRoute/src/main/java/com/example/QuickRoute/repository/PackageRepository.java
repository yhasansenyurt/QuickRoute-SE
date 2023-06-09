package com.example.QuickRoute.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.QuickRoute.entity.Package;

public interface PackageRepository extends JpaRepository<Package, Long> {

}
