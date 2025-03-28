"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import validator from "validator";

export default function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validatePasswords = () => {
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            setError("");
        }
    };

    const validateEmail = () => {
        if (!validator.isEmail(email)) setEmailError("Invalid Email Format");
        else setEmailError("");
    }

    return (
        <section className="flex justify-center items-center min-h-screen px-4 pt-30" style={{ fontFamily: "Geist, sans-serif" }}>
            <Card className="w-full max-w-md shadow-lg p-6 bg-background/60 ">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Name Input */}
                    <Input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="p-3 bg-white text-lg" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* Email Input */}
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 bg-white text-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                    />

                    {/* Email Invalid Message */}
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

                    {/* Password Input */}
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="p-3 bg-white text-lg pr-10"
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

                    {/* Confirm Password Input */}
                    <div className="relative">
                        <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="p-3 bg-white text-lg pr-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={validatePasswords}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 sm:right-4 flex items-center p-2 sm:p-3"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible className="text-xl sm:text-2xl" />
                            ) : (
                                <AiOutlineEye className="text-xl sm:text-2xl" />
                            )}
                        </button>

                    </div>

                    {/* Password Error Message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Register Button */}
                    <Button 
                        className="w-full text-lg py-3 cursor-pointer" disabled={error !== "" || emailError !== ""}>Sign Up
                    </Button>

                    {/* Divider */}
                    <div className="relative flex items-center my-4">
                        <div className="w-full border-b border-gray-300"></div>
                        <span className="px-3 text-sm text-gray-500">OR</span>
                        <div className="w-full border-b border-gray-300"></div>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="flex flex-col gap-3">
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
                            <FcGoogle className="text-xl" /> Sign up with Google
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
                            <FaFacebook className="text-blue-600 text-xl" /> Sign up with Facebook
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer text-black">
                            <FaApple className="w-5 h-5" /> Sign up with Apple
                        </Button>
                    </div>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </CardContent>
                {/* <div className="text-center text-xs text-muted-foreground mt-4">
                    By clicking continue, you agree to our{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-primary">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-primary">
                        Privacy Policy
                    </a>.
                </div> */}
            </Card>
        </section>
    );
}
