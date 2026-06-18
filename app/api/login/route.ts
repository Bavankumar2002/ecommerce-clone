import { NextResponse } from "next/server";
import pool, { initDatabase } from "@/lib/db";

export async function POST(request: Request) {
  try {
    await initDatabase();
    const { identifier } = await request.json();

    if (!identifier || typeof identifier !== "string") {
      return NextResponse.json(
        { error: "Identifier (email or phone) is required" },
        { status: 400 }
      );
    }

    const trimmed = identifier.trim();

    // Query user by email or phone
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ? OR phone = ?",
      [trimmed, trimmed]
    ) as any[];

    if (rows.length > 0) {
      const user = rows[0];
      return NextResponse.json({
        success: true,
        exists: true,
        user: {
          id: user.id,
          email: user.email,
          phone: user.phone,
        },
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          exists: false,
          error: "User not found. Please create an account.",
        },
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}
