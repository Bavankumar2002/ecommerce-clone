"use client";

import { useContext } from "react";
import { AuthContext, AuthUser } from "@/context/AuthContext";

export type { AuthUser };

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}