import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

// Prevent overwriting model during hot reloads
// export const User = mongoose.model("User", userSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
