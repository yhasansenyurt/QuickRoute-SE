-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: quickroute
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `end_date` datetime DEFAULT NULL,
  `from_latitude` double NOT NULL,
  `from_longitude` double NOT NULL,
  `is_accepted` int NOT NULL,
  `is_delivered` int NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `to_latitude` double NOT NULL,
  `to_longitude` double NOT NULL,
  `courier_id` bigint DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `package_id` bigint DEFAULT NULL,
  `rating` double DEFAULT NULL,
  `distance` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkda753b42924l6hhnyxt75n6c` (`courier_id`),
  KEY `FKsjfs85qf6vmcurlx43cnc16gy` (`customer_id`),
  KEY `FK6kb9u6u1oyil56npvm02vsvoo` (`package_id`),
  CONSTRAINT `FK6kb9u6u1oyil56npvm02vsvoo` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`),
  CONSTRAINT `FKkda753b42924l6hhnyxt75n6c` FOREIGN KEY (`courier_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKsjfs85qf6vmcurlx43cnc16gy` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,NULL,20,15,0,0,NULL,35,32,NULL,4,6,0,5),(2,NULL,41.067,29.017,0,0,NULL,41.0793,28.9788,NULL,4,8,0,1012452.6371836901),(3,'2023-05-25 20:35:59',41.067,29.017,1,1,'2023-05-25 20:35:51',41.0793,28.9788,5,4,8,4,3481.8643312812956),(4,'2023-05-25 20:33:40',41.067,29.017,1,1,'2023-05-25 20:33:17',41.0793,28.9788,5,4,8,5,3.4818643312812956),(5,'2023-05-25 19:20:27',41.067,29.017,1,1,'2023-05-25 18:57:50',41.0793,28.9788,5,4,8,3.5,3.482);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `height` double NOT NULL,
  `is_breakable` int NOT NULL,
  `weight` double NOT NULL,
  `customer_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpjvj3o1wvlanqsa4wm2i1th28` (`customer_id`),
  CONSTRAINT `FKpjvj3o1wvlanqsa4wm2i1th28` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES (1,21,0,5.5,4),(2,21,0,5.5,4),(3,21,0,5.5,4),(4,15,1,8,3),(5,15,1,8,4),(6,15,1,8,4),(7,15,1,8,4),(8,152,1,155,4);
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `rating_average` double DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ysf.senyurt@gmail.com','Hasan','Senyurt',0,0,'$2a$10$Qj4NbThGbTMrvfoERAsDReeERDpecK7My7cNXdWx8o5KlWLDhZT4K','05352523565',0,'CUSTOMER'),(3,'kerem@gmail.com','Kerem','Ekinci',0,0,'$2a$10$tHCjlrhdZwNEj3/y.UCnxO9cA19dkHWgFXI3lYG1wcaapemfcVTq6','05352523531',0,'CUSTOMER'),(4,'mert@gmail.com','MertP','AkbalP',5,4,'$2a$10$atXLdDkf/T2cDOKtrj0YgOrKwVmmMTZjRdbuPpn1xrxNNyAUwDEDO','05351112225',0,'CUSTOMER'),(5,'kurye@gmail.com','Kurye1','Kurye1',41.0793,28.9788,'$2a$10$9BYLbwnGDW4Gvt4GyqksGeqfG2AkNu9aDVMKINRUAlBIYnCi7gZiK','05352526231',4.166666666666667,'COURIER'),(7,'admin','admin','admin',0,0,'$2a$10$VIlptieLiFAY0txqSw1cjOj6MXC2SorC3ti7AbZMp20tr4A7HyfEC','000000000',0,'ADMIN');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-27 16:15:39
