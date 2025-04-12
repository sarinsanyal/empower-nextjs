"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const data = "";

	useEffect(() => {
		async function fetchUser() {
			try {
				const res = await fetch("/api/user");

				if (res.ok) {
					const data = await res.json();
					setUser(data);
				} else {
					setUser(null);
				}
			} catch (err) {
				console.error("Error checking user:", err);
				setUser(null);
			} finally {
				setLoading(false);
			}
		}

		fetchUser();
	}, []);

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

					{loading ? (
						null
					) : (
						<div className="hidden md:flex space-x-4">
							{user ? (
								<>
									<Link href="/journal" className="hover:underline font-semibold">
										Journal
									</Link>
									<Link href="/dashboard" className="hover:underline font-semibold">
										Dashboard
									</Link>
									{/* For Logging Out */}
									<button
										onClick={async () => {
											setUser(null);
											localStorage.removeItem('authToken');
											const response = await fetch('/api/logout', {
												method: 'POST',
											});
											window.location.reload();

											if (response.ok) toast.message('User Logged Out');
											else toast.error('Error Logging out');
										}}
										className="hover:underline font-semibold cursor-pointer"
									>
										Logout
									</button>
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
					)}
				</div>

				{/* Right: Profile Photo and Theme Toggle */}
				<div className="flex flex-row">
					{user ? (
						<>
							<Image
								src={data.profilePhoto || "/profilePhoto.png"}
								alt="Profile Photo"
								height={40}
								width={40}
								className="rounded-full cursor-pointer mr-5 border-1 border-gray-300"
							/>
						</>
					) : null}

					<Button
						variant="outline"
						size="icon"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
					</Button>
				</div>

			</div>
			<Separator />
		</nav>
	);
};

export default Navbar;
