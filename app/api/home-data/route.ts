import { NextResponse } from "next/server";
import pool, { initDatabase } from "@/lib/db";

export async function GET() {
  try {
    await initDatabase();

    // 1. Fetch banner slides
    const [banners] = await pool.query(
      "SELECT id, bg, image_url as imageUrl FROM banner_slides"
    ) as any[];

    // 2. Fetch category cards
    const [cards] = await pool.query(
      "SELECT id, title, link FROM category_cards"
    ) as any[];

    const categoryCards = [];
    for (const card of cards) {
      const [items] = await pool.query(
        "SELECT label, img FROM category_card_items WHERE card_id = ?",
        [card.id]
      ) as any[];
      categoryCards.push({
        title: card.title,
        link: card.link,
        items: items,
      });
    }

    // 3. Fetch deal boxes dynamically from products table
    const categoriesForDeals = [
      {
        id: 1,
        title: "Starting ₹70,348 | Engineered for the road",
        categoryName: "Car & Motorbike",
        seeAllLink: "/products?category=Car%20%26%20Motorbike",
        seeAllLabel: "See all offers"
      },
      {
        id: 2,
        title: "Min. 30% off | Curated collections from Small Businesses",
        categoryName: "Home & Kitchen",
        seeAllLink: "/products?category=Home%20%26%20Kitchen",
        seeAllLabel: "See more"
      },
      {
        id: 3,
        title: "Up to 60% off | Top deals on Electronics",
        categoryName: "Electronics",
        seeAllLink: "/products?category=Electronics",
        seeAllLabel: "See all deals"
      },
      {
        id: 4,
        title: "Fashion | Trending styles at great prices",
        categoryName: "Clothing & Accessories",
        seeAllLink: "/products?category=Clothing%20%26%20Accessories",
        seeAllLabel: "Explore all"
      }
    ];

    const dealBoxes = [];
    for (const cat of categoriesForDeals) {
      const [items] = await pool.query(
        "SELECT id, title as label, image_url as img FROM products WHERE category = ? LIMIT 8",
        [cat.categoryName]
      ) as any[];

      if (items.length > 0) {
        dealBoxes.push({
          id: cat.id,
          title: cat.title,
          seeAllLink: cat.seeAllLink,
          seeAllLabel: cat.seeAllLabel,
          items: items,
        });
      }
    }

    return NextResponse.json({
      success: true,
      bannerSlides: banners,
      categoryCards,
      dealBoxes,
    });
  } catch (error: any) {
    console.error("Home data API error:", error);
    return NextResponse.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}
