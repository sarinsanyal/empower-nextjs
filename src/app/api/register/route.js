import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/app/db/mongodb";
import User from "@/app/models/userSchema";

export async function POST(req){
    try{
        await connectToDatabase();

        const {name, email, password, profileCompleted, sex, DOB, phone, profilePhoto} = await req.json();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists'}, {status: 400});
        }
        
        const newUser = new User({name, email, password, profileCompleted, sex, DOB, phone, profilePhoto});
        await newUser.save();

        return NextResponse.json({ message: 'User Registered Succesfully' }, { status: 201 });
    } catch (error) {
        console.log("Error during Registration: ", error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}