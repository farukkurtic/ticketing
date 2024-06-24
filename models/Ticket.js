import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true, // mongo adds createdAt and updatedAt fields automatically
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
