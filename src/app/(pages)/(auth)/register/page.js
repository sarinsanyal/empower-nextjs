"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Register() {
    return (
        <section className="flex justify-center items-center min-h-screen px-4" style={{ fontFamily: "Geist, sans-serif" }}>
            <Card className="w-full max-w-md shadow-lg p-6 bg-background/60 ">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Name Input */}
                    <Input type="text" placeholder="Enter your full name" className="p-3 bg-white text-lg" />
                    {/* Email Input */}
                    <Input type="email" placeholder="Enter your email" className="p-3 bg-white text-lg" />
                    {/* Password Input */}
                    <Input type="password" placeholder="Enter your password" className="p-3 bg-white text-lg" />
                    {/* Register Button */}
                    <Button className="w-full text-lg py-3">Sign Up</Button>

                    {/* Divider */}
                    <div className="relative flex items-center my-4">
                        <div className="w-full border-b border-gray-300"></div>
                        <span className="px-3 text-sm text-gray-500">OR</span>
                        <div className="w-full border-b border-gray-300"></div>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="flex flex-col gap-3">
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                            <FcGoogle className="text-xl" /> Sign up with Google
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                            <FaFacebook className="text-blue-600 text-xl" /> Sign up with Facebook
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-black">
                            <FaApple className="w-5 h-5" /> Continue with Apple
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
            </Card>
        </section>
    );
}
