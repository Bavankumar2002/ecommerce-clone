"use client";

import React, { createContext, useState, useEffect } from "react";
import api from "@/lib/api";

export interface AuthUser {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
  login: (identifier: string, password?: string) => Promise<{ success: boolean; exists: boolean }>;
  register: (name: string, identifier: string, password?: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (identifier: string, password?: string): Promise<{ success: boolean; exists: boolean }> => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/login", { identifier, password });
      if (password !== undefined) {
        const loggedInUser: AuthUser = res.data.user;
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
      }
      return { success: true, exists: true };
    } catch (err: any) {
      const isNotFound = err?.response?.status === 404 || err?.response?.data?.exists === false;
      const message = err?.response?.data?.error ?? "Login failed. Please try again.";
      setError(message);
      return { success: false, exists: !isNotFound };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, identifier: string, password?: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/register", { name, identifier, password });
      const registeredUser: AuthUser = res.data.user;
      setUser(registeredUser);
      localStorage.setItem("user", JSON.stringify(registeredUser));
      return true;
    } catch (err: any) {
      const message = err?.response?.data?.error ?? "Registration failed. Please try again.";
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

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
