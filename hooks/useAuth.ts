"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";

export interface AuthUser {
  id: number;
  email: string | null;
  phone: string | null;
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { localStorage.removeItem("user"); }
    }
  }, []);

  const login = async (identifier: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/login", { identifier });
      const loggedInUser: AuthUser = res.data.user;
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      return true;
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { error?: string } } })?.response?.data?.error
        ?? "Login failed. Please try again.";
      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, login, logout, loading, error };
}