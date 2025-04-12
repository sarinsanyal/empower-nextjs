"use client";

import { use, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import validator from "validator";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [error, setError] = useState("");

    const validatePasswords = () => {
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
        } else {
            setError("");
        }
    };

    const validateEmail = () => {
        if (!validator.isEmail(email)) setEmailError("Invalid Email Format");
        else setEmailError("");
    }

    return (
        <section className="flex justify-center items-center min-h-screen px-4 pt-20">
            <Card className="w-full max-w-md shadow-lg p-6 bg-background/50" style={{ fontFamily: "Geist, sans-serif" }}>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Login to Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Email Input */}
                    <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="p-3 bg-white text-sm sm:text-lg" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                    />

                    {/* Email Invalid Message */}
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

                    {/* Password Input with Toggle */}
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="p-3 bg-white text-sm sm:text-lg pr-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePasswords}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 sm:right-4 flex items-center p-2 sm:p-3"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible className="text-xl sm:text-2xl" />
                            ) : (
                                <AiOutlineEye className="text-xl sm:text-2xl" />
                            )}
                        </button>
                    </div>
                    {/* Password Error Message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Forgot Password Link */}
                    <div className="flex justify-end">
                        <a href="#" className="text-xs underline-offset-4 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <Button className="w-full text-lg py-3 cursor-pointer" disabled={error !== "" || emailError !== ""}>Login</Button>

                    {/* Divider */}
                    <div className="relative flex items-center my-4">
                        <div className="w-full border-b border-gray-300"></div>
                        <span className="px-3 text-sm text-gray-500">OR</span>
                        <div className="w-full border-b border-gray-300"></div>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="flex flex-col gap-3">
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
                            <FcGoogle className="text-xl" /> Continue with Google
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
                            <FaFacebook className="text-blue-600 text-xl" /> Continue with Facebook
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer text-black">
                            <FaApple className="w-5 h-5" /> Continue with Apple
                        </Button>
                    </div>

                    {/* Register Link */}
                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-primary font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </section>
    );
}
