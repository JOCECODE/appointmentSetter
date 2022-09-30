DROP DATABASE IF EXISTS parlor_db;
CREATE DATABASE parlor_db;

USE parlor_db;

CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
admin_username VARCHAR(30) NOT NULL,
pass_word TEXT NOT NULL,
is_deleted BOOLEAN DEFAULT false
);

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone_number INT NOT NULL,
  address TEXT NOT NULL,
  email_address TEXT NOT NULL,
  pass_word TEXT NOT NULL,
  appointment_timer INT,
  is_deleted BOOLEAN DEFAULT false
);

CREATE TABLE appointments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  formulas TEXT NOT NULL,
  haircut TEXT NOT NULL,
  products_used TEXT NOT NULL,
  reciept TEXT NOT NULL,
  is_deleted BOOLEAN DEFAULT false,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);