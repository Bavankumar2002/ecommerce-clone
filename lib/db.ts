import mysql from "mysql2/promise";

let pool: mysql.Pool;

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Bavankumar@123",
  database: process.env.DB_NAME || "ecommerce_db",
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
        email VARCHAR(255) UNIQUE DEFAULT NULL,
        phone VARCHAR(15) UNIQUE DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

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

    // 5. Create deal_boxes table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS deal_boxes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        see_all_link VARCHAR(255) NOT NULL,
        see_all_label VARCHAR(255) NOT NULL
      )
    `);

    // 6. Create deal_box_items table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS deal_box_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        box_id INT NOT NULL,
        label VARCHAR(255) NOT NULL,
        img VARCHAR(512) NOT NULL,
        FOREIGN KEY (box_id) REFERENCES deal_boxes(id) ON DELETE CASCADE
      )
    `);

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

    // ── Seed Deal Boxes if empty ──
    const [deals] = await connection.query("SELECT COUNT(*) as count FROM deal_boxes") as any[];
    if (deals[0].count === 0) {
      const dealBoxes = [
        {
          title: "Starting ₹70,348 | Engineered for the road",
          seeAllLink: "#",
          seeAllLabel: "See all offers",
          items: [
            { label: "Bajaj Pulsar NS200", img: "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg" },
            { label: "Bajaj Pulsar N150", img: "https://m.media-amazon.com/images/I/61GHpNzKP1L._AC_UL480_FMwebp_QL65_.jpg" },
            { label: "Honda CB Shine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOSVVublEfDGSc0_gEXKHDg0Owr9a-DZiMVNqRVBjLw&s" },
            { label: "Hero Splendor Plus", img: "https://m.media-amazon.com/images/I/41IwyO8DbVL._AC_UL480_FMwebp_QL65_.jpg" },
            { label: "TVS Apache", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtYeZFQ4zDq4nB6d4rYuQNEPoZAsbz1lg7rBskU0v1ptqfMgTopuEkRzTbvsDkJfDMbrpfa72YYugGWuRKBFlhHHYwxLT4kf_SVzuYcoB&s=10" },
            { label: "Ultraviolette F77", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgzQmfdsJW28Xc2DHk7o3Jp5Cz1-QtkOLgOGTr76rjg&s=10" },
            { label: "Yamaha XSR155", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMVCtrK5f06R2fJl9BmWb7xJOmE62DoXdegGQDtkkBQ&s=10" },
            { label: "Yamaha MT15", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAD6l4mfC-ktSiz9gg7ROa5Lxj8A20g-Vc9Oz34aMJA&s=10" },
          ],
        },
        {
          title: "Min. 30% off | Curated collections from Small Businesses",
          seeAllLink: "#",
          seeAllLabel: "See more",
          items: [
            { label: "Furniture", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
            { label: "Wall Art", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
            { label: "Decorative Items", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" },
            { label: "Handmade Baskets", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
            { label: "Globe Decor", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
            { label: "Kitchen Organizer", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
            { label: "Cutlery Set", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
          ],
        },
        {
          title: "Up to 60% off | Top deals on Electronics",
          seeAllLink: "#",
          seeAllLabel: "See all deals",
          items: [
            { label: "Smartphones", img: "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg" },
            { label: "Laptops", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg" },
            { label: "Earbuds", img: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg" },
            { label: "Smart Watches", img: "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg" },
            { label: "Tablets", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg" },
          ],
        },
        {
          title: "Fashion | Trending styles at great prices",
          seeAllLink: "#",
          seeAllLabel: "Explore all",
          items: [
            { label: "Men's T-Shirts", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
            { label: "Women's Kurtas", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" },
            { label: "Sneakers", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" },
            { label: "Handbags", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" },
            { label: "Sunglasses", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
          ],
        },
      ];
      for (const box of dealBoxes) {
        const [result] = await connection.query("INSERT INTO deal_boxes (title, see_all_link, see_all_label) VALUES (?, ?, ?)", [box.title, box.seeAllLink, box.seeAllLabel]) as any;
        const boxId = result.insertId;
        for (const item of box.items) {
          await connection.query("INSERT INTO deal_box_items (box_id, label, img) VALUES (?, ?, ?)", [boxId, item.label, item.img]);
        }
      }
    }

  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  } finally {
    connection.release();
  }
}

export default pool;
