// auth.ts
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod"; // Optional: for validating inputs
import { User } from "./app/model/user";
import { connectDB } from "./app/lib/db";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // 1. Validate input
        const parsedCredentials = z
          .object({ email: z.string(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const con = connectDB();
          // 2. Mock User Check (Replace this with real DB call later)
          const s = await User.find({ username: email, password: password });
          // if (email === "test@example.com" && password === "password123") {
          if (s.length) {
            return { id: "1", name: "Test User", email: email };
          }
        }

        return null; // Login failed
      },
    }),
  ],
});
