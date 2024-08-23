import { NextResponse } from "next/server";
import { getCategoriesAndDocuments } from "@/utils/firebase";
import { CategoryType } from "@/types/types";

export async function GET() {
  try {
    const categories: CategoryType[] = await getCategoriesAndDocuments();
    return NextResponse.json(categories);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to Fetch Categories", error: error.message },
      { status: 500 }
    );
  }
}
