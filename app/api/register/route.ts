import { NextResponse } from "next/server";
import pool, { initDatabase } from "@/lib/db";

export async function POST(request: Request) {
  try {
    await initDatabase();
    const { identifier, password } = await request.json();

    if (!identifier || typeof identifier !== "string") {
      return NextResponse.json(
        { error: "Identifier (email or phone) is required" },
        { status: 400 }
      );
    }

    const trimmed = identifier.trim();
    const isEmail = trimmed.includes("@");

    let emailVal = null;
    let phoneVal = null;

    if (isEmail) {
      emailVal = trimmed;
    } else {
      phoneVal = trimmed;
    }

    // Check if user already exists
    const [existing] = await pool.query(
      "SELECT * FROM users WHERE (email IS NOT NULL AND email = ?) OR (phone IS NOT NULL AND phone = ?)",
      [emailVal, phoneVal]
    ) as any[];

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "User already exists with this email or phone" },
        { status: 400 }
      );
    }

    // Insert user with password
    const [result] = await pool.query(
      "INSERT INTO users (email, phone, password) VALUES (?, ?, ?)",
      [emailVal, phoneVal, password || ""]
    ) as any;

    const newUserId = result.insertId;

    return NextResponse.json({
      success: true,
      user: {
        id: newUserId,
        email: emailVal,
        phone: phoneVal,
      },
    });
  } catch (error: any) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}
