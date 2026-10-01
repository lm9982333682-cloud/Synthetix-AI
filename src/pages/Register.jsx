import React from "react";
import { User, Mail, Lock, Sparkles, Network, } from "lucide-react";
import registerImage from '../images/register.png'
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#100e14] text-white">

            {/* Main Section */}
            <div className="min-h-[calc(100vh-90px)] grid grid-cols-1 lg:grid-cols-2">

                {/* ================= LEFT SECTION ================= */}
                <div
                    className="hidden lg:flex relative min-h-[900px] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${registerImage})`,
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-[#061124]/55" />

                    {/* Gradient Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#100e14] via-[#100e14]/70 to-transparent" />

                    {/* Logo */}
                    <div className="relative z-10 px-6 py-5">
                        <h2 className="text-[22px] font-bold tracking-tight">
                            Synthetix AI
                        </h2>
                    </div>

                    {/* Left Content */}
                    <div className="absolute z-10 left-12 bottom-12 max-w-[440px]">

                        {/* Small Heading */}
                        <div className="flex items-center gap-2 mb-5">
                            <Sparkles
                                size={19}
                                className="text-purple-300"
                            />

                            <span className="text-xs font-semibold tracking-[3px] text-purple-200">
                                NEXT-GEN INTELLIGENCE
                            </span>
                        </div>

                        <h1 className="text-[38px] leading-[1.15] font-bold">
                            Accelerate your team's
                            <br />
                            intelligence.
                        </h1>

                        <p className="mt-5 text-[17px] leading-7 text-gray-300">
                            Connect your enterprise data to our specialized AI
                            models and unlock unparalleled strategic insights
                            in seconds.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-12 mt-10">

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    99.9%
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Uptime SLA
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    ISO
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    27001 Certified
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ================= RIGHT SECTION ================= */}
                <div className="flex items-center justify-center px-6 py-12 lg:px-16">

                    <div className="w-full max-w-[560px]">

                        {/* Heading */}
                        <div className="mb-8">
                            <h1 className="text-[34px] md:text-[36px] font-bold tracking-tight">
                                Create your account
                            </h1>

                            <p className="mt-2 text-[16px] text-gray-400">
                                Experience the future of collaborative data intelligence.
                            </p>
                        </div>


                        {/* ================= FORM ================= */}
                        <form className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <User
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full h-[60px] rounded-lg border border-[#45414b] bg-[#1d1a20] pl-16 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-400 transition"
                                    />
                                </div>
                            </div>


                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                                    />

                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full h-[60px] rounded-lg border border-[#45414b] bg-[#1d1a20] pl-16 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-400 transition"
                                    />
                                </div>
                            </div>


                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                                    />

                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full h-[60px] rounded-lg border border-[#45414b] bg-[#1d1a20] pl-16 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-400 transition"
                                    />
                                </div>

                                {/* Password Strength */}
                                <div className="flex gap-1 mt-2">

                                    <div className="h-1 flex-1 rounded-full bg-purple-300" />
                                    <div className="h-1 flex-1 rounded-full bg-purple-300" />
                                    <div className="h-1 flex-1 rounded-full bg-purple-300" />
                                    <div className="h-1 flex-1 rounded-full bg-[#28252c]" />

                                </div>

                                <p className="text-sm text-purple-300 mt-1">
                                    Strong password
                                </p>
                            </div>


                            {/* Terms */}
                            <div className="flex items-start gap-3 pt-1">

                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mt-1 w-5 h-5 appearance-none rounded border border-[#55515a] bg-transparent checked:bg-purple-500 checked:border-purple-500 cursor-pointer"
                                />

                                <label
                                    htmlFor="terms"
                                    className="text-sm text-gray-300 leading-6"
                                >
                                    I agree to the{" "}
                                    <span className="text-purple-300">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span className="text-purple-300">
                                        Privacy Policy
                                    </span>
                                    .
                                </label>

                            </div>


                            {/* Create Account */}
                            <button
                                type="submit"
                                className="w-full h-[58px] rounded-lg bg-gradient-to-r from-[#7653c5] to-[#c5aefc] text-[#180e2e] font-semibold text-[17px] hover:opacity-90 transition shadow-lg"
                            >
                                Create Account
                            </button>


                            {/* Divider */}
                            <div className="flex items-center gap-4 py-4">

                                <div className="h-px bg-[#2d2931] flex-1" />

                                <span className="text-xs text-gray-600 uppercase">
                                    Or continue with
                                </span>

                                <div className="h-px bg-[#2d2931] flex-1" />

                            </div>


                            {/* Social Buttons */}
                            <div className="grid grid-cols-2 gap-4">

                                <button
                                    type="button"
                                    className="h-[58px] rounded-lg border border-[#49454e] hover:bg-[#1d1a20] transition flex items-center justify-center gap-3 text-gray-200"
                                >
                                    <span className="text-lg">◉</span>
                                    Google
                                </button>

                                <button
                                    type="button"
                                    className="h-[58px] rounded-lg border border-[#49454e] hover:bg-[#1d1a20] transition flex items-center justify-center gap-3 text-gray-200"
                                >
                                    <Network size={19} />
                                    SSO
                                </button>

                            </div>


                            {/* Login */}
                            <div className="text-center pt-8">

                                <span className="text-gray-300">
                                    Already have an account?{" "}
                                </span>

                                <button
                                onClick={()=>navigate("/login")}
                                    type="button"
                                    className="text-purple-300 cursor-pointer font-semibold hover:text-purple-200"
                                >
                                    Log In
                                </button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>


            {/* ================= FOOTER ================= */}
            <footer className="border-t border-[#242129] min-h-[90px] px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-5 py-6">

                <h2 className="text-xl font-bold">
                    Synthetix AI
                </h2>

                <div className="flex flex-wrap justify-center gap-7 text-sm text-gray-400">
                    <button className="hover:text-white">
                        Privacy Policy
                    </button>

                    <button className="hover:text-white">
                        Terms of Service
                    </button>

                    <button className="hover:text-white">
                        Security
                    </button>

                    <button className="hover:text-white">
                        System Status
                    </button>
                </div>

                <p className="text-xs text-gray-500">
                    © 2024 Synthetix AI. Enterprise Intelligence Platforms.
                </p>

            </footer>

        </div>
    );
};

export default Register;

