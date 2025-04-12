import { NextResponse } from "next/server";
import connectToDatabase from "@/app/db/mongodb";
import User from "@/app/models/userSchema";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET

export async function GET() {
    try {
        const authToken = (await cookies()).get('authToken')?.value;

        if (!authToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(authToken, JWT_SECRET);
        await connectToDatabase();
        const user = await User.findOne({ _id: decoded.userId }).select('-password -__v');

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 401 });
    }
}
