create Database IF NOT EXISTS ecommerce_db;

use ecommerce_db;

-- Create a User Table 
CREATE TABLE IF NOT EXISTS users (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  email        VARCHAR(255) UNIQUE DEFAULT NULL,
  phone        VARCHAR(15) UNIQUE DEFAULT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);