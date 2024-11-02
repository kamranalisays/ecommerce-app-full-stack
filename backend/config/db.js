import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log(
      `Connected  to MongoDB: ${conn.connection.host}`.cyan.underline
    );
  } catch (e) {
    console.error(`Error: ${e.message}`.red);
  }
};

export default connectDB;
