"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import validator from "validator";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { toast } from "sonner";


export default function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const router = useRouter();

    const validatePasswords = () => {
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
        } else if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
        } else {
            setPasswordError("");
        }
    };

    const validateEmail = () => {
        if (!validator.isEmail(email)) setEmailError("Invalid Email Format");
        else setEmailError("");
    }

    const handleSubmit = async () => {
        const registered_data = { name, email, password };
        setLoading(true);
        console.log("User is being registered manually...");
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registered_data)
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Registration Successfull! ", result);
                toast.success("Registration Successful! Redirecting to login page...");
                setTimeout(() => {
                    router.push("/login");
                }, 1000);
            }
            else {
                console.error("Registration Failed: ", result.error);
                toast.error(result.error || "Something went wrong");
            }

        } catch (error) {
            console.error("Error During Registration!! ", error);
            toast.error("Error During Registration!! ", error);
        }
        setLoading(false);
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen px-4 pt-20" style={{ fontFamily: "Geist, sans-serif" }}>
            <Card className="w-full max-w-md shadow-lg mt-10 p-4 bg-background/60 ">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Name Input */}
                    <Input
                        type="text"
                        placeholder="Enter your full name"
                        className="p-3 bg-white text-sm sm:text-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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

                    {/* Password Input */}
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
                            style={{ paddingRight: 0 }}
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
                            type="password"
                            placeholder="Confirm your password"
                            className="p-3 bg-white text-sm sm:text-lg pr-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={validatePasswords}
                        />
                    </div>

                    {/* Password Error Message */}
                    {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

                    {/* Register Button */}
                    {/* <Dialog> */}
                    {/* <DialogTrigger asChild> */}
                    <Button
                        onClick={handleSubmit}
                        className="w-full text-lg py-3 cursor-pointer" disabled={passwordError !== "" || emailError !== "" || loading}
                    >
                        {loading ? "Registering you in..." : "Register"}
                    </Button>
                    {/* </DialogTrigger> */}

                    {/* Now for the Manual OTP Verification */}
                    {/* <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Verify OTP</DialogTitle>
                                <DialogDescription>
                                    OTP has been sent to your Email ID: {email ? email : "example@example.com"}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex items-center space-x-2">
                                <InputOTP maxLength={6}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>

                            <div className = "text-xs cursor-pointer hover:underline">
                                Resend OTP?
                            </div>
                        </DialogContent>

                    </Dialog> */}

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
            </Card>
            <div className="text-center text-xs m-10 text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <a href="#" className="underline underline-offset-4 hover:text-primary">
                    Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-4 hover:text-primary">
                    Privacy Policy
                </a>.
            </div>
        </section>
    );
}
