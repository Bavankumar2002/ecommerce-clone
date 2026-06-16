"use client";

export function useAuth() {
  const login = (email: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", email);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
  };

  const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;

  return {
    user,
    login,
    logout,
  };
}
