"use server";

import { revalidatePath } from "next/cache";

export async function abc() {
  console.log("vachindi abc ki req");
  return { msg: "ithada" };
  //   revalidatePath("/aboutus");
}
