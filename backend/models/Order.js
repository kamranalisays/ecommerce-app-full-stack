import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    totalCost: Number,
    orderDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
