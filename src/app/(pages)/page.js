"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FeaturesSection from "@/components/layout/FeaturesSection";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center 
                 justify-center min-h-screen px-6 text-center space-y-12 pt-20"
      style={{ fontFamily: "Geist, sans-serif" }}
    >
      {/* Title */}
      <h1 className="text-4xl mt-40 sm:text-5xl font-bold tracking-tight">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                   text-transparent bg-clip-text animate-gradient">
          EmPower Journal!
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-muted-foreground max-w-md">
        {/* Reflect, Grow, and Thrive. */}
        A smart journal to organize your thoughts, track progress, and stay motivated.
      </p>

      {/* Features Section */}
      <div className="w-full max-w-4xl">
        <FeaturesSection />
      </div>

      {/* Login/Register Card */}
      <Card className="mt-8 bg-background/50 backdrop-blur-3xl w-full max-w-sm transform transition-transform">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Get Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Create an account to start journaling, set reminders, and analyze your daily
            reflections. Your journey to self-improvement starts here!
          </p>

          {/* Email Sign-up */}
          <Input type="email" placeholder="Enter your email" className="text-lg p-3" />
          <Button className="w-full text-lg py-3 cursor-pointer">Continue</Button>

          <div className="relative flex items-center">
            <hr className="w-full border-muted-foreground" />
            <span className="px-3 text-sm text-muted-foreground">OR</span>
            <hr className="w-full border-muted-foreground" />
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
              <FcGoogle className="w-5 h-5" /> Continue with Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
              <FaFacebook className="text-blue-600 text-xl" /> Continue with Facebook
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer text-black">
              <FaApple className="w-5 h-5" /> Continue with Apple
            </Button>
          </div>

          <div className="text-base text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
