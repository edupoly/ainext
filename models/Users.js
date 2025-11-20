// models/User.ts
import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    unique: true,
  },
});

// This line is crucial:
// It prevents Mongoose from recompiling the model every time
// in a serverless environment (which causes errors).
export default mongoose.models.Player || mongoose.model("Player", PlayerSchema);
