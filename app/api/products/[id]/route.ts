import { NextResponse } from "next/server";
import pool, { initDatabase } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await initDatabase();
    const { id } = await params;

    const [products] = await pool.query(
      "SELECT id, title, price, mrp, rating, rating_count as ratingCount, image_url as imageUrl, images, badge, category, brand, highlights, specs, description, stock FROM products WHERE id = ?",
      [id]
    ) as any[];

    if (!products || products.length === 0) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const product = products[0];
    const formattedProduct = {
      ...product,
      images: typeof product.images === "string" ? JSON.parse(product.images) : product.images,
      specs: typeof product.specs === "string" ? JSON.parse(product.specs) : product.specs,
    };

    return NextResponse.json({
      success: true,
      product: formattedProduct,
    });
  } catch (error: any) {
    console.error("Product details API error:", error);
    return NextResponse.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}
