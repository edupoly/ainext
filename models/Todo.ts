// models/User.ts
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a name."],
  },
  status: {
    type: Boolean,
    default: false,
  },
});

// This line is crucial:
// It prevents Mongoose from recompiling the model every time
// in a serverless environment (which causes errors).
export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
