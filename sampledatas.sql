-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `simplileap`;

-- Use the created database
USE `simplileap`;

-- Create a table
CREATE TABLE IF NOT EXISTS `deals` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NOT NULL,
  `area` VARCHAR(255) NOT NULL,
  `appointmentdate` VARCHAR(255) NOT NULL,
  `price` VARCHAR(255) NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `picture` TEXT,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Insert sample data
INSERT INTO `deals` (id, address, area, appointmentdate, price, status, createdAt, updatedAt, picture)
VALUES
  (1, '221 Drive Street, Pittsburgh, PA', '300 M', 'JAN 23, 2022 07:00 AM', '$6000', 'In Progress', '2021-11-14 07:00:00', '2021-11-14 07:00:00', 'https://drive.google.com/uc?export=view&id=1IH0PVPqUDF1RTvv1E7kR2oeyskCw3Q3u'),
  (2, '343 Marina Drive, California, CA', '500 M', 'DEC 13, 2022 10:00 AM', '$7500', 'Pending', '2021-11-14 08:00:00', '2021-11-14 07:00:00', 'https://drive.google.com/uc?export=view&id=1mQ0vTuF63-Dud8v1JO5dzE4Rft7UQbZm'),
  (3, '143 Court Street, Amsterdam, AM', '700 M', 'JUL 22, 2023 03:00 PM', '$5000', 'Success', '2021-11-14 09:00:00', '2021-11-14 07:00:00', 'https://drive.google.com/uc?export=view&id=1LXzwZk-aRBhfZEQGfzTpnvT2RbR9l9DD'),
  (4, '625 Peace Circle, Magnolia, MG', '600 M', 'AUG 29, 2023 08:00 PM', '$9000', 'Cancel', '2021-11-14 10:00:00', '2021-11-14 07:00:00', 'https://drive.google.com/uc?export=view&id=1qY9KL_uncKVyRDEzjUqn6NWAoLw_URiB');
