// export default function ProfilePage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Your Profile</h1>
//       <p>Manage your account settings.</p>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import {
    User,
    Package,
    MapPin,
    CreditCard,
    Lock,
    LogOut,
    ChevronRight,
    ListOrdered,
} from "lucide-react";

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !user) {
            router.push("/login");
        }
    }, [mounted, user, router]);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    if (!mounted || !user) {
        return (
            <main className="min-h-[60vh] flex items-center justify-center bg-[#eaeded]">
                <p className="text-sm text-gray-600">Loading your account...</p>
            </main>
        );
    }

    const displayName = user.email || user.phone || "Customer";

    const accountLinks = [
        {
            icon: Package,
            title: "Your Orders",
            description: "Track, return, or buy things again",
            href: "/orders",
        },
        {
            icon: User,
            title: "Login & Security",
            description: "Edit name, email, mobile number, and password",
            href: "#",
        },
        {
            icon: MapPin,
            title: "Your Addresses",
            description: "Edit addresses for orders and gifts",
            href: "#",
        },
        {
            icon: CreditCard,
            title: "Payment Options",
            description: "Edit or add payment methods",
            href: "#",
        },
        {
            icon: ListOrdered,
            title: "Your Wishlist",
            description: "View items you've saved for later",
            href: "#",
        },
        {
            icon: Lock,
            title: "Privacy & Security",
            description: "Manage your data and account privacy",
            href: "#",
        },
    ];

    return (
        <main className="bg-[#eaeded] min-h-screen pb-16">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-300 px-4 py-6 md:px-8">
                <h1 className="text-2xl md:text-3xl font-bold text-[#0F1111]">
                    Your Account
                </h1>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-6">
                {/* Profile Summary Card */}
                <div className="bg-white border border-[#d5d9d9] rounded-lg p-5 md:p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-[#febd69] flex items-center justify-center text-2xl font-bold text-[#0F1111] shrink-0">
                            {displayName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className="text-lg font-bold text-[#0F1111] break-all">
                                {displayName}
                            </p>
                            <p className="text-sm text-gray-600">
                                Member ID: #{user.id}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 border border-[#888c8c] rounded-full px-5 h-9 text-sm font-medium text-[#0F1111] bg-white hover:bg-gray-50 cursor-pointer transition-colors shrink-0"
                    >
                        <LogOut size={16} />
                        Sign out
                    </button>
                </div>

                {/* Account Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {accountLinks.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className="bg-white border border-[#d5d9d9] rounded-lg p-4 flex items-start gap-3 hover:shadow-md hover:border-[#007185] transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#f0f2f2] flex items-center justify-center shrink-0">
                                    <Icon size={20} className="text-[#0F1111]" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-sm text-[#0F1111]">
                                        {item.title}
                                    </p>
                                    <p className="text-xs text-gray-600 mt-0.5">
                                        {item.description}
                                    </p>
                                </div>
                                <ChevronRight size={16} className="text-gray-400 shrink-0 mt-1" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}       