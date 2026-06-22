import mysql from "mysql2/promise";
import { products as seedProducts } from "./products-seed";

let pool: mysql.Pool;

const dbConfig = {
  host: (process.env.DB_HOST || "localhost").trim(),
  port: parseInt((process.env.DB_PORT || "3306").trim(), 10),
  user: (process.env.DB_USER || "root").trim(),
  password: (process.env.DB_PASSWORD || "Bavankumar@123").trim(),
  database: (process.env.DB_NAME || "ecommerce_db").trim(),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

if (process.env.NODE_ENV === "production") {
  pool = mysql.createPool(dbConfig);
} else {
  if (!(global as any)._mysqlPool) {
    (global as any)._mysqlPool = mysql.createPool(dbConfig);
  }
  pool = (global as any)._mysqlPool;
}

export async function initDatabase() {
  const connection = await pool.getConnection();
  try {
    // 1. Create users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) DEFAULT NULL,
        email VARCHAR(255) UNIQUE DEFAULT NULL,
        phone VARCHAR(15) UNIQUE DEFAULT NULL,
        password VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Ensure name column exists (in case users table already existed without it)
    try {
      const [columns] = await connection.query("SHOW COLUMNS FROM users LIKE 'name'") as any[];
      if (columns.length === 0) {
        await connection.query("ALTER TABLE users ADD COLUMN name VARCHAR(255) DEFAULT NULL");
      }
    } catch (colErr) {
      console.warn("Could not check/add name column in users table:", colErr);
    }

    // Ensure password column exists (in case users table already existed without it)
    try {
      const [columns] = await connection.query("SHOW COLUMNS FROM users LIKE 'password'") as any[];
      if (columns.length === 0) {
        await connection.query("ALTER TABLE users ADD COLUMN password VARCHAR(255) DEFAULT NULL");
      }
    } catch (colErr) {
      console.warn("Could not check/add password column in users table:", colErr);
    }

    // 2. Create banner_slides table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS banner_slides (
        id INT AUTO_INCREMENT PRIMARY KEY,
        bg VARCHAR(50) NOT NULL,
        image_url VARCHAR(512) NOT NULL
      )
    `);

    // 3. Create category_cards table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS category_cards (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL
      )
    `);

    // 4. Create category_card_items table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS category_card_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        card_id INT NOT NULL,
        label VARCHAR(255) NOT NULL,
        img VARCHAR(512) NOT NULL,
        FOREIGN KEY (card_id) REFERENCES category_cards(id) ON DELETE CASCADE
      )
    `);

    // Drop legacy deal_boxes and deal_box_items tables if they exist
    try {
      await connection.query("DROP TABLE IF EXISTS deal_box_items");
      await connection.query("DROP TABLE IF EXISTS deal_boxes");
    } catch (dropErr) {
      console.warn("Could not drop legacy deal tables:", dropErr);
    }

    // ── Seed Banner Slides if empty ──
    const [banners] = await connection.query("SELECT COUNT(*) as count FROM banner_slides") as any[];
    if (banners[0].count === 0) {
      const bannerSlides = [
        { bg: "#fce4ec", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg" },
        { bg: "#e3f2fd", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/1/toys/Desktop_tall_Hero_3000x1200_RC-Cars_1._CB784186419_.jpg" },
        { bg: "#e3f2fd", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/Mar26/WBLB3000X1200.jpg._CB786181535_.jpg" },
        { bg: "#e3f2fd", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/May26/Desktop_tall_Hero_3000x1200_EL_Rec._CB762895918_.jpg" },
        { bg: "#e3f2fd", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Dec/amazonspecial/BFCM25_GW_PC_Hero._CB775393558_.jpg" },
        { bg: "#e3f2fd", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78270._CB785061629_.jpg" },
        { bg: "#e3f2fd", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_may25_refresh._CB761742379_.jpg" },
      ];
      for (const slide of bannerSlides) {
        await connection.query("INSERT INTO banner_slides (bg, image_url) VALUES (?, ?)", [slide.bg, slide.imageUrl]);
      }
    }

    // ── Seed Category Cards if empty ──
    const [categories] = await connection.query("SELECT COUNT(*) as count FROM category_cards") as any[];
    if (categories[0].count === 0) {
      const categoryCards = [
        {
          title: "Appliances for your home | Up to 55% off",
          link: "See more",
          items: [
            { label: "Air conditioners", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
            { label: "Refrigerators", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" },
            { label: "Microwaves", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" },
            { label: "Washing machines", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" },
          ],
        },
        {
          title: "Revamp your home in style",
          link: "Explore all",
          items: [
            { label: "Cushion covers, bedsheets & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
            { label: "Figurines, vases & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
            { label: "Home storage", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
            { label: "Lighting solutions", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" },
          ],
        },
        {
          title: "Starting ₹49 | Deals on home essentials",
          link: "Explore all",
          items: [
            { label: "Cleaning supplies", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" },
            { label: "Bathroom accessories", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" },
            { label: "Home tools", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" },
            { label: "Wallpapers", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" },
          ],
        },
        {
          title: "Up to 75% off | Deals on headphones",
          link: "Explore all",
          items: [
            { label: "Neckband 1", img: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg" },
            { label: "Neckband 2", img: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg" },
            { label: "Earbuds 1", img: "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg" },
            { label: "Earbuds 2", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg" },
          ],
        },
      ];
      for (const card of categoryCards) {
        const [result] = await connection.query("INSERT INTO category_cards (title, link) VALUES (?, ?)", [card.title, card.link]) as any;
        const cardId = result.insertId;
        for (const item of card.items) {
          await connection.query("INSERT INTO category_card_items (card_id, label, img) VALUES (?, ?, ?)", [cardId, item.label, item.img]);
        }
      }
    }



    // 7. Create products table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(512) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        mrp DECIMAL(10,2) DEFAULT NULL,
        rating DECIMAL(2,1) NOT NULL DEFAULT 4.0,
        rating_count INT NOT NULL DEFAULT 0,
        image_url VARCHAR(512) NOT NULL,
        images JSON DEFAULT NULL,
        badge VARCHAR(50) DEFAULT NULL,
        category VARCHAR(100) NOT NULL DEFAULT 'Electronics',
        brand VARCHAR(100) DEFAULT NULL,
        highlights TEXT DEFAULT NULL,
        specs JSON DEFAULT NULL,
        description TEXT DEFAULT NULL,
        stock INT DEFAULT 10,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Seed products if empty or outdated
    const [productsCount] = await connection.query("SELECT COUNT(*) as count FROM products") as any[];
    if (productsCount[0].count < seedProducts.length) {
      await connection.query("DELETE FROM products");
      const products = seedProducts;
      for (const p of products) {
        await connection.query(
          "INSERT INTO products (id, title, price, mrp, rating, rating_count, image_url, images, badge, category, brand, highlights, specs, description, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [p.id, p.title, p.price, p.mrp, p.rating, p.rating_count, p.image_url, p.images, p.badge, p.category, p.brand, p.highlights, p.specs, p.description, p.stock]
        );
      }
    }

    // 8. Create orders table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        total DECIMAL(10,2) NOT NULL,
        shipping_name VARCHAR(255) NOT NULL,
        shipping_address VARCHAR(512) NOT NULL,
        shipping_city VARCHAR(100) NOT NULL,
        shipping_zip VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // 9. Create order_items table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS order_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
      )
    `);

    // 10. Create cart_items table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY unique_user_product (user_id, product_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
      )
    `);
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  } finally {
    connection.release();
  }
}

export default pool;
