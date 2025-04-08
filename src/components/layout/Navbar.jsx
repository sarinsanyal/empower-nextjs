"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-background/50 backdrop-blur-md border-b border-border z-50">
      <div
        className="container mx-auto px-6 flex items-center justify-between h-full"
        style={{ fontFamily: "Geist, sans-serif" }}
      >
        {/* Left: Brand + Links */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-xl font-semibold whitespace-nowrap 
             bg-gradient-to-r from-purple-500 to-blue-500 
             bg-clip-text text-black transition-all duration-500 
             hover:text-transparent hover:bg-clip-text">
            EmPower Journal
          </Link>

          <div className="hidden md:flex space-x-4">
            {isLoggedIn ? (
              <>
                <Link href="/journal" className="hover:underline font-semibold">
                  Journal
                </Link>
                <Link href="/dashboard" className="hover:underline font-semibold">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:underline font-semibold">
                  Login
                </Link>
                <Link href="/premium" className="hover:underline font-semibold">
                  Premium
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Right: Theme Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
      <Separator />
    </nav>
  );
};

export default Navbar;
