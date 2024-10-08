import axios from "axios";

import { NextResponse } from "next/server";

const API_URL = `https://api.txgroup.biz/${
  process.env.NODE_ENV === "production" ? "prod" : "dev"
}`;

export async function GET(request: Request) {
  try {
    const response = await axios.get(`${API_URL}/contact`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API request failed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await axios.post(`${API_URL}/contact`, body);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API request failed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
