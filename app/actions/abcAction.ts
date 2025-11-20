"use server";

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
export async function abc() {
  console.log("vachindi abc ki req");
  return { msg: "ithada" };
  //   revalidatePath("/aboutus");
}

export async function getPlayers() {
  console.log("getPlayers called");
  try {
    const con = await dbConnect();
    console.clear();
    console.log("success::");
  } catch (e) {
    console.log("Exception::", e);
  }
}
