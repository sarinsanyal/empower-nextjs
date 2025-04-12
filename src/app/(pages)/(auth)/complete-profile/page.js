"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompleteProfile() {
	const [profilePhoto, setProfilePhoto] = useState(null);
	const [sex, setSex] = useState("");
	const [dob, setDob] = useState("");
	const [phone, setPhone] = useState("");
	const [profileCompleted, setProfileCompleted] = useState(false);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const data = {profilePhoto, sex, dob, phone, profileCompleted};

	useEffect(() => {
		function fetchUser() {
			if (loading) console.log("Loading user data...");
			(async () => {
				try {
					const res = await fetch("/api/user");
					const data = await res.json();
					setUser(data);
					console.log("User Data is: ", user);
				} catch (error) {
					console.error("Error fetching user:", error);
				}
				setLoading(false);
			})();
		}

		fetchUser();
	}, [loading]);


	const handleSubmit = () => {
		if (!profilePhoto || !sex || !dob || !phone) {
			toast.error("Please fill all the fields!");
			return;
		}

		setProfileCompleted(true);
		toast.success("Profile completed successfully!");
	};

	const handlePhotoChange = (e) => {
		const file = e.target.files ? e.target.files[0] : null;
		if (file) {
			setProfilePhoto(URL.createObjectURL(file)); 
		}
	};

	return (
		<div className="flex min-h-screen pt-20 mb-10 justify-center px-4">
			<Card className="w-full max-w-md shadow-lg p-6 bg-background/50" style={{ fontFamily: "Geist, sans-serif" }}>
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">Complete Your Profile</CardTitle>
				</CardHeader>

				<CardContent className="space-y-4">

					{/* Profile Photo */}
					<div className="mb-6">
						<img
							src={(user && user.profilePhoto) || "/default-image.png"}
							alt="Profile"
							className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
						/>

						<div className="block mx-auto w-full max-w-xs cursor-pointer">
							<Input id="picture" type="file" onChange={handlePhotoChange}/>
						</div>
					</div>

					{/* Sex Selection */}
					<div className="mb-6">
						<Select value={sex} onValueChange={setSex} aria-label="Select your gender">
							<SelectTrigger className="w-full max-w-xs mx-auto">
								<span>{sex || "Select Sex"}</span>
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="male">Male</SelectItem>
								<SelectItem value="female">Female</SelectItem>
								<SelectItem value="other">Other</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Date of Birth */}
					<div className="mb-6">
						<Input
							type="date"
							value={dob}
							onChange={(e) => setDob(e.target.value)}
							placeholder="Date of Birth"
							aria-label="Date of Birth"
							className="block mx-auto w-full max-w-xs"
						/>
					</div>

					{/* Phone Number */}
					<div className="mb-6">
						<Input
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder="Phone Number"
							aria-label="Phone"
							className="block mx-auto w-full max-w-xs"
						/>
					</div>

					{/* Submit Button */}
					<Button onClick={handleSubmit} className="w-full max-w-xs mx-auto">
						Complete Profile
					</Button>

					{profileCompleted && (
						<div className="mt-6 text-green-500">
							<p>Profile Completed!</p>
						</div>
					)}
				</CardContent>
			</Card>
		</div >
	);
}
