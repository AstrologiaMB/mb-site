import connectDB from "@/lib/mongooseConnector";
import { NextResponse, NextRequest } from "next/server";
import User, { IUser } from "@/lib/models/user";

type BasicUser = {
  email: string;
  name: string;
  dateOfBirth: string;
};

export async function POST(request: NextRequest) {
  const { email, name, dateOfBirth }: BasicUser = await request.json();

  try {
    await connectDB();
    const userFound = await User.findOne({ email }).select("email");

    if (!userFound) {
      const newUser: IUser = new User({
        dateOfBirth,
        name,
        email,
      });

      const savedUser = await newUser.save();
    }

    return NextResponse.json(
      { message: "Operation successful" },
      { status: 200 },
    );
  } catch (error) {
    console.error("There was an error trying to retrive/save the user", error);
  }
}
