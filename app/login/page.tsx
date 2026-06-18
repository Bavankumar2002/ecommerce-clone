// "use client";

// import { useState } from "react";
// import { useAuth } from "@/hooks/useAuth";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//     const { login } = useAuth();
//     const router = useRouter();
//     const [email, setEmail] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (email.trim()) {
//             login(email);
//             router.push("/");
//         }
//     };

//     return (
//         <main className="mt-auto border-t border-gray-300 py-6 md:py-10 px-4">
//             {/* Logo */}
//             <div className="flex justify-center pt-4 md:pt-6">
//                 <h1 className="text-4xl md:text-5xl font-bold">
//                     amazon<span className="text-base md:text-lg">.in</span>
//                 </h1>
//             </div>

//             {/* Login Card */}
//             <div className="flex justify-center mt-6 mb-24">
//                 <form onSubmit={handleSubmit} className="w-full max-w-[350px] border border-[#d5d9d9] rounded-lg p-6 bg-white shadow-sm">
//                     <h1 className="text-3xl font-normal mb-4">
//                         Sign in or create account
//                     </h1>

//                     <label className="block text-sm font-bold mb-2">
//                         Enter mobile number or email
//                     </label>

//                     <input
//                         type="text"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full h-8 border border-[#888c8c] rounded px-3 text-black focus:border-[#007185] focus:ring-2 focus:ring-[#c8f3fa]"
//                     />

//                     <button type="submit" className="w-full mt-4 bg-[#ffd814] hover:bg-[#f7ca00] h-8 rounded-full text-sm text-black cursor-pointer">
//                         Continue
//                     </button>

//                     <p className="text-sm mt-4">
//                         By continuing, you agree to Amazon&apos;s{" "}
//                         <a href="#" className="text-blue-600">
//                             Conditions of Use
//                         </a>{" "}
//                         and{" "}
//                         <a href="#" className="text-blue-600">
//                             Privacy Notice
//                         </a>
//                         .
//                     </p>

//                     <hr className="my-5" />

//                     <h3 className="font-bold">Buying for work?</h3>

//                     <a href="#" className="text-blue-600 text-sm">
//                         Create a free business account
//                     </a>
//                 </form>
//             </div>

//             {/* Footer */}
//             <footer className="mt-auto border-t border-gray-300 py-8">
//                 <div className="flex justify-center gap-8 text-xs">
//                     <a href="#" className="text-[#0066c0] hover:underline">
//                         Conditions of Use
//                     </a>

//                     <a href="#" className="text-[#0066c0] hover:underline">
//                         Privacy Notice
//                     </a>

//                     <a href="#" className="text-[#0066c0] hover:underline">
//                         Help
//                     </a>
//                 </div>

//                 <p className="text-center text-sm text-gray-600 mt-4">
//                     © 1996-2026, Amazon.com, Inc. or its affiliates
//                 </p>
//             </footer>
//         </main>
//     );
// }

"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login, loading, error } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            const result = await login(email);
            if (result.success) {
                router.push("/");
            } else if (!result.exists) {
                router.push(`/create-account?identifier=${encodeURIComponent(email.trim())}`);
            }
        }
    };

    return (
        <main className="mt-auto border-t border-gray-300 py-6 md:py-10 px-4">
            {/* Logo */}
            <div className="flex justify-center pt-4 md:pt-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                    amazon<span className="text-base md:text-lg">.in</span>
                </h1>
            </div>

            {/* Login Card */}
            <div className="flex justify-center mt-6 mb-24">
                <form onSubmit={handleSubmit} className="w-full max-w-[350px] border border-[#d5d9d9] rounded-lg p-6 bg-white shadow-sm">
                    <h1 className="text-3xl font-normal mb-4">
                        Sign in or create account
                    </h1>

                    <label className="block text-sm font-bold mb-2">
                        Enter mobile number or email
                    </label>

                    <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-8 border border-[#888c8c] rounded px-3 text-black focus:border-[#007185] focus:ring-2 focus:ring-[#c8f3fa]"
                    />

                    {/* ── Only new lines: error message + loading state ── */}
                    {error && (
                        <p className="text-red-600 text-xs mt-1">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-[#ffd814] hover:bg-[#f7ca00] h-8 rounded-full text-sm text-black cursor-pointer disabled:opacity-60"
                    >
                        {loading ? "Please wait..." : "Continue"}
                    </button>

                    <p className="text-sm mt-4">
                        By continuing, you agree to Amazon&apos;s{" "}
                        <a href="#" className="text-blue-600">
                            Conditions of Use
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600">
                            Privacy Notice
                        </a>
                        .
                    </p>

                    <hr className="my-5" />

                    <h3 className="font-bold">Buying for work?</h3>

                    <a href="#" className="text-blue-600 text-sm">
                        Create a free business account
                    </a>
                </form>
            </div>

            {/* Footer */}
            <footer className="mt-auto border-t border-gray-300 py-8">
                <div className="flex justify-center gap-8 text-xs">
                    <a href="#" className="text-[#0066c0] hover:underline">
                        Conditions of Use
                    </a>

                    <a href="#" className="text-[#0066c0] hover:underline">
                        Privacy Notice
                    </a>

                    <a href="#" className="text-[#0066c0] hover:underline">
                        Help
                    </a>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    © 1996-2026, Amazon.com, Inc. or its affiliates
                </p>
            </footer>
        </main>
    );
}