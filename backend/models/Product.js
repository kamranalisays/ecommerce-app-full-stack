import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    subcategory: String,
    brand: String,
    stock: Number,
    rating: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
