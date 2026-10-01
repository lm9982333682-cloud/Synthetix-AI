import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiLogIn, FiCloud } from "react-icons/fi";
import { useNavigate } from "react-router";

const Login = () => {

  const navigate = useNavigate();

  
  return (
    <div className="min-h-screen bg-[#0f0d13] text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-[430px]">

        {/* Login Card */}
        <div className="bg-[#1c1a1f] border border-[#302d35] rounded-xl p-8 shadow-2xl">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#7654c5] flex items-center justify-center">
              <FiCloud size={26} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-2xl font-semibold">
            Synthetix AI
          </h1>

          <p className="text-center text-gray-400 text-sm mt-1">
            Sign in to your workspace
          </p>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mt-8">

            <button
              type="button"
              className="h-11 rounded-lg border border-[#3a363f] bg-[#28252c] hover:bg-[#302c35] transition flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FcGoogle size={19} />
              GOOGLE
            </button>

            <button
              type="button"
              className="h-11 rounded-lg border border-[#3a363f] bg-[#28252c] hover:bg-[#302c35] transition flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FaGithub size={18} />
              GITHUB
            </button>

          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-[#353139] flex-1"></div>

            <span className="text-xs text-gray-400 whitespace-nowrap">
              or continue with email
            </span>

            <div className="h-px bg-[#353139] flex-1"></div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-2">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="w-full h-11 rounded-lg bg-[#0d0b10] border border-[#38343d] px-4 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#7654c5] transition"
            />
          </div>

          {/* Password */}
          <div className="mt-6">

            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-gray-300">
                PASSWORD
              </label>

              <button
                type="button"
                className="text-xs text-purple-300 hover:text-purple-200 transition"
              >
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-11 rounded-lg bg-[#0d0b10] border border-[#38343d] px-4 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#7654c5] transition"
            />

          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mt-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 accent-[#7654c5] cursor-pointer"
            />

            <label
              htmlFor="remember"
              className="text-xs text-gray-300 cursor-pointer"
            >
              Stay signed in
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-12 mt-6 rounded-lg bg-[#7654c5] hover:bg-[#6848b4] transition flex items-center justify-center gap-2 text-sm font-medium"
          >
            Sign In
            <FiLogIn size={18} />
          </button>

          {/* Signup */}
          <div className="border-t border-[#302d35] mt-8 pt-6 text-center">
            <span className="text-xs text-gray-400">
              Don't have an account?{" "}
            </span>

            <button
              onClick={() => navigate("/register")}
              type="button"
              className="text-xs cursor-pointer text-purple-300 hover:text-purple-200 font-medium"
            >
              Sign Up
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-600">
            © 2024 Synthetix AI. Enterprise Intelligence Platforms.
          </p>

          <div className="flex justify-center gap-4 mt-2">
            <button className="text-xs text-gray-600 hover:text-gray-400">
              Privacy Policy
            </button>

            <button className="text-xs text-gray-600 hover:text-gray-400">
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;