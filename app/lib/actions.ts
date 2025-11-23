// app/lib/actions.ts
"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { User } from "../model/user";
import Student from "../model/student";
import { connectDB } from "./db";
import student from "../model/student";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log("actions file");
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function getUsers() {
  const con = await connectDB();
  const x = await User.find();
  return x;
}

export async function getStudents() {
  const con = await connectDB();
  const y = await Student.find();
  return y;
}
