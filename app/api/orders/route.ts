import { NextResponse } from "next/server";
import pool, { initDatabase } from "@/lib/db";

// POST /api/orders - Place a new order
export async function POST(request: Request) {
  let connection;
  try {
    await initDatabase();
    const { userId, total, shippingName, shippingAddress, shippingCity, shippingZip, items } = await request.json();

    if (!userId || !total || !shippingName || !shippingAddress || !shippingCity || !shippingZip || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Missing required order information" },
        { status: 400 }
      );
    }

    connection = await pool.getConnection();
    await connection.beginTransaction();

    // 1. Insert order
    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, total, shipping_name, shipping_address, shipping_city, shipping_zip) VALUES (?, ?, ?, ?, ?, ?)",
      [userId, total, shippingName, shippingAddress, shippingCity, shippingZip]
    ) as any;

    const orderId = orderResult.insertId;

    // 2. Insert order items & update product stock
    for (const item of items) {
      // Check stock before updating
      const [prodRows] = await connection.query("SELECT stock FROM products WHERE id = ?", [item.id]) as any[];
      if (prodRows.length === 0) {
        throw new Error(`Product ID ${item.id} not found`);
      }
      const currentStock = prodRows[0].stock;
      if (currentStock < item.quantity) {
        throw new Error(`Insufficient stock for product ID ${item.id}. Available: ${currentStock}, Requested: ${item.quantity}`);
      }

      // Insert item
      await connection.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.id, item.quantity, item.price]
      );

      // Decrement stock
      await connection.query(
        "UPDATE products SET stock = stock - ? WHERE id = ?",
        [item.quantity, item.id]
      );
    }

    await connection.commit();

    return NextResponse.json({
      success: true,
      orderId,
      message: "Order placed successfully",
    });
  } catch (error: any) {
    if (connection) {
      await connection.rollback();
    }
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to place order" },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// GET /api/orders - Fetch orders for a user
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

    // Fetch user orders sorted by created_at DESC
    const [orders] = await pool.query(
      "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    ) as any[];

    // Fetch items for all orders
    const ordersWithItems = [];
    for (const order of orders) {
      const [items] = await pool.query(
        `SELECT oi.*, p.title, p.image_url, p.brand, p.category 
         FROM order_items oi
         JOIN products p ON oi.product_id = p.id
         WHERE oi.order_id = ?`,
        [order.id]
      ) as any[];

      ordersWithItems.push({
        ...order,
        items,
      });
    }

    return NextResponse.json({
      success: true,
      orders: ordersWithItems,
    });
  } catch (error: any) {
    console.error("Fetch orders error:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
