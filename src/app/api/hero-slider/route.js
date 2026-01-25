import dbConnect from "@/lib/mongoose";
import HeroSlider from "@/models/HeroSlider";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await dbConnect();
    const slides = await HeroSlider.find({});
    return NextResponse.json(slides);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch hero slider data." },
      { status: 500 });
  }
}

