import { NextResponse } from "next/server";
import pool, { initDatabase } from "@/lib/db";

// GET /api/cart - Fetch all items in a user's cart
export async function GET(request: Request) {
  try {
    await initDatabase();
    const { searchParams } = new URL(request.url);
    const userIdStr = searchParams.get("userId");

    if (!userIdStr) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const userId = parseInt(userIdStr, 10);

    const [items] = await pool.query(
      `SELECT ci.product_id as id, ci.quantity, p.title, p.price, p.image_url as imageUrl, p.brand, p.stock
       FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.user_id = ?`,
      [userId]
    ) as any[];

    return NextResponse.json({
      success: true,
      items,
    });
  } catch (error: any) {
    console.error("Fetch cart error:", error);
    return NextResponse.json(
      { error: "Failed to fetch cart items" },
      { status: 500 }
    );
  }
}

// POST /api/cart - Add a single item or merge multiple guest items into the cart
export async function POST(request: Request) {
  try {
    await initDatabase();
    const body = await request.json();
    const { userId, productId, quantity, items } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const uId = parseInt(userId, 10);

    if (items && Array.isArray(items)) {
      // Merge multiple items (guest cart integration on login)
      for (const item of items) {
        const prodId = parseInt(item.id, 10);
        const qty = parseInt(item.quantity, 10);

        if (isNaN(prodId) || isNaN(qty)) continue;

        await pool.query(
          `INSERT INTO cart_items (user_id, product_id, quantity)
           VALUES (?, ?, ?)
           ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)`,
          [uId, prodId, qty]
        );
      }
    } else {
      // Add a single item
      const prodId = parseInt(productId, 10);
      const qty = parseInt(quantity, 10);

      if (isNaN(prodId) || isNaN(qty)) {
        return NextResponse.json(
          { error: "Product ID and valid quantity are required" },
          { status: 400 }
        );
      }

      await pool.query(
        `INSERT INTO cart_items (user_id, product_id, quantity)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)`,
        [uId, prodId, qty]
      );
    }

    return NextResponse.json({
      success: true,
      message: "Cart updated successfully",
    });
  } catch (error: any) {
    console.error("Add/Merge cart error:", error);
    return NextResponse.json(
      { error: "Failed to update cart" },
      { status: 500 }
    );
  }
}

// PUT /api/cart - Update the quantity of a specific item in the cart
export async function PUT(request: Request) {
  try {
    await initDatabase();
    const { userId, productId, quantity } = await request.json();

    if (!userId || !productId || quantity === undefined) {
      return NextResponse.json(
        { error: "User ID, Product ID, and quantity are required" },
        { status: 400 }
      );
    }

    const uId = parseInt(userId, 10);
    const prodId = parseInt(productId, 10);
    const qty = parseInt(quantity, 10);

    if (isNaN(uId) || isNaN(prodId) || isNaN(qty) || qty < 1) {
      return NextResponse.json(
        { error: "Invalid parameters" },
        { status: 400 }
      );
    }

    await pool.query(
      `UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?`,
      [qty, uId, prodId]
    );

    return NextResponse.json({
      success: true,
      message: "Cart item quantity updated successfully",
    });
  } catch (error: any) {
    console.error("Update cart error:", error);
    return NextResponse.json(
      { error: "Failed to update cart item quantity" },
      { status: 500 }
    );
  }
}

// DELETE /api/cart - Delete a specific item or clear the entire cart
export async function DELETE(request: Request) {
  try {
    await initDatabase();
    const { searchParams } = new URL(request.url);
    const userIdStr = searchParams.get("userId");
    const productIdStr = searchParams.get("productId");

    if (!userIdStr) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const userId = parseInt(userIdStr, 10);

    if (productIdStr) {
      const productId = parseInt(productIdStr, 10);
      await pool.query(
        "DELETE FROM cart_items WHERE user_id = ? AND product_id = ?",
        [userId, productId]
      );
      return NextResponse.json({
        success: true,
        message: "Cart item deleted successfully",
      });
    } else {
      await pool.query(
        "DELETE FROM cart_items WHERE user_id = ?",
        [userId]
      );
      return NextResponse.json({
        success: true,
        message: "Cart cleared successfully",
      });
    }
  } catch (error: any) {
    console.error("Delete cart error:", error);
    return NextResponse.json(
      { error: "Failed to delete cart item(s)" },
      { status: 500 }
    );
  }
}
