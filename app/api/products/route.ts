import { NextResponse } from "next/server";
import pool, { initDatabase } from "@/lib/db";

export async function GET() {
  try {
    await initDatabase();

    const [products] = await pool.query(
      "SELECT id, title, price, mrp, rating, rating_count as ratingCount, image_url as imageUrl, images, badge, category, brand, highlights, specs, description, stock FROM products ORDER BY id ASC"
    ) as any[];

    // Parse JSON columns if necessary
    const formattedProducts = products.map((p: any) => ({
      ...p,
      images: typeof p.images === "string" ? JSON.parse(p.images) : p.images,
      specs: typeof p.specs === "string" ? JSON.parse(p.specs) : p.specs,
    }));

    return NextResponse.json({
      success: true,
      products: formattedProducts,
    });
  } catch (error: any) {
    console.error("Products API error:", error);
    return NextResponse.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}
