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

    // 3. Fetch deal boxes
    const [boxes] = await pool.query(
      "SELECT id, title, see_all_link as seeAllLink, see_all_label as seeAllLabel FROM deal_boxes"
    ) as any[];

    const dealBoxes = [];
    for (const box of boxes) {
      const [items] = await pool.query(
        "SELECT label, img FROM deal_box_items WHERE box_id = ?",
        [box.id]
      ) as any[];
      dealBoxes.push({
        id: box.id,
        title: box.title,
        seeAllLink: box.seeAllLink,
        seeAllLabel: box.seeAllLabel,
        items: items,
      });
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
