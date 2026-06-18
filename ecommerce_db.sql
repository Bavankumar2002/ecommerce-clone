CREATE DATABASE IF NOT EXISTS ecommerce_db;

USE ecommerce_db;

-- 1. Create a User Table 
CREATE TABLE IF NOT EXISTS users (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  email        VARCHAR(255) UNIQUE DEFAULT NULL,
  phone        VARCHAR(15) UNIQUE DEFAULT NULL,
  password     VARCHAR(255) DEFAULT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create Banner Slides Table
CREATE TABLE IF NOT EXISTS banner_slides (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bg VARCHAR(50) NOT NULL,
  image_url VARCHAR(512) NOT NULL
);

-- 3. Create Category Cards Table
CREATE TABLE IF NOT EXISTS category_cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL
);

-- 4. Create Category Card Items Table
CREATE TABLE IF NOT EXISTS category_card_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  card_id INT NOT NULL,
  label VARCHAR(255) NOT NULL,
  img VARCHAR(512) NOT NULL,
  FOREIGN KEY (card_id) REFERENCES category_cards(id) ON DELETE CASCADE
);

-- 5. Create Deal Boxes Table
CREATE TABLE IF NOT EXISTS deal_boxes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  see_all_link VARCHAR(255) NOT NULL,
  see_all_label VARCHAR(255) NOT NULL
);

-- 6. Create Deal Box Items Table
CREATE TABLE IF NOT EXISTS deal_box_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  box_id INT NOT NULL,
  label VARCHAR(255) NOT NULL,
  img VARCHAR(512) NOT NULL,
  FOREIGN KEY (box_id) REFERENCES deal_boxes(id) ON DELETE CASCADE
);

-- ── Seed Banner Slides Data ──
INSERT IGNORE INTO banner_slides (id, bg, image_url) VALUES
(1, '#fce4ec', 'https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg'),
(2, '#e3f2fd', 'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/1/toys/Desktop_tall_Hero_3000x1200_RC-Cars_1._CB784186419_.jpg'),
(3, '#e3f2fd', 'https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/Mar26/WBLB3000X1200.jpg._CB786181535_.jpg'),
(4, '#e3f2fd', 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/May26/Desktop_tall_Hero_3000x1200_EL_Rec._CB762895918_.jpg'),
(5, '#e3f2fd', 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Dec/amazonspecial/BFCM25_GW_PC_Hero._CB775393558_.jpg'),
(6, '#e3f2fd', 'https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78270._CB785061629_.jpg'),
(7, '#e3f2fd', 'https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_may25_refresh._CB761742379_.jpg');

-- ── Seed Category Cards Data ──
INSERT IGNORE INTO category_cards (id, title, link) VALUES
(1, 'Appliances for your home | Up to 55% off', 'See more'),
(2, 'Revamp your home in style', 'Explore all'),
(3, 'Starting ₹49 | Deals on home essentials', 'Explore all'),
(4, 'Up to 75% off | Deals on headphones', 'Explore all');

-- ── Seed Category Card Items Data ──
INSERT IGNORE INTO category_card_items (id, card_id, label, img) VALUES
(1, 1, 'Air conditioners', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'),
(2, 1, 'Refrigerators', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'),
(3, 1, 'Microwaves', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'),
(4, 1, 'Washing machines', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'),

(5, 2, 'Cushion covers, bedsheets & more', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg'),
(6, 2, 'Figurines, vases & more', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg'),
(7, 2, 'Home storage', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg'),
(8, 2, 'Lighting solutions', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg'),

(9, 3, 'Cleaning supplies', 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg'),
(10, 3, 'Bathroom accessories', 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg'),
(11, 3, 'Home tools', 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg'),
(12, 3, 'Wallpapers', 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg'),

(13, 4, 'Neckband 1', 'https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg'),
(14, 4, 'Neckband 2', 'https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg'),
(15, 4, 'Earbuds 1', 'https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg'),
(16, 4, 'Earbuds 2', 'https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg');

-- ── Seed Deal Boxes Data ──
INSERT IGNORE INTO deal_boxes (id, title, see_all_link, see_all_label) VALUES
(1, 'Starting ₹70,348 | Engineered for the road', '#', 'See all offers'),
(2, 'Min. 30% off | Curated collections from Small Businesses', '#', 'See more'),
(3, 'Up to 60% off | Top deals on Electronics', '#', 'See all deals'),
(4, 'Fashion | Trending styles at great prices', '#', 'Explore all');

-- ── Seed Deal Box Items Data ──
INSERT IGNORE INTO deal_box_items (id, box_id, label, img) VALUES
(1, 1, 'Bajaj Pulsar NS200', 'https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg'),
(2, 1, 'Bajaj Pulsar N150', 'https://m.media-amazon.com/images/I/61GHpNzKP1L._AC_UL480_FMwebp_QL65_.jpg'),
(3, 1, 'Honda CB Shine', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOSVVublEfDGSc0_gEXKHDg0Owr9a-DZiMVNqRVBjLw&s'),
(4, 1, 'Hero Splendor Plus', 'https://m.media-amazon.com/images/I/41IwyO8DbVL._AC_UL480_FMwebp_QL65_.jpg'),
(5, 1, 'TVS Apache', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtYeZFQ4zDq4nB6d4rYuQNEPoZAsbz1lg7rBskU0v1ptqfMgTopuEkRzTbvsDkJfDMbrpfa72YYugGWuRKBFlhHHYwxLT4kf_SVzuYcoB&s=10'),
(6, 1, 'Ultraviolette F77', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgzQmfdsJW28Xc2DHk7o3Jp5Cz1-QtkOLgOGTr76rjg&s=10'),
(7, 1, 'Yamaha XSR155', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMVCtrK5f06R2fJl9BmWb7xJOmE62DoXdegGQDtkkBQ&s=10'),
(8, 1, 'Yamaha MT15', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAD6l4mfC-ktSiz9gg7ROa5Lxj8A20g-Vc9Oz34aMJA&s=10'),

(9, 2, 'Furniture', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg'),
(10, 2, 'Wall Art', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg'),
(11, 2, 'Decorative Items', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg'),
(12, 2, 'Handmade Baskets', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg'),
(13, 2, 'Globe Decor', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg'),
(14, 2, 'Kitchen Organizer', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg'),
(15, 2, 'Cutlery Set', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg'),

(16, 3, 'Smartphones', 'https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg'),
(17, 3, 'Laptops', 'https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg'),
(18, 3, 'Earbuds', 'https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg'),
(19, 3, 'Smart Watches', 'https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg'),
(20, 3, 'Tablets', 'https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg'),

(21, 4, 'Men\'s T-Shirts', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'),
(22, 4, 'Women\'s Kurtas', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'),
(23, 4, 'Sneakers', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'),
(24, 4, 'Handbags', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'),
(25, 4, 'Sunglasses', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg');

ALTER TABLE users
ADD COLUMN password VARCHAR(255) DEFAULT NULL;

select * from users;