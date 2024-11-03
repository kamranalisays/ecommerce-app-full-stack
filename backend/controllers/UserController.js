import userModel from "../models/userModel.js";
import authUtils from "../utils/authUtils.js";

const userRegister = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (name == null) {
      return res.send({ error: "Name is required" });
    }
    if (email == null) {
      return res.send({ error: "email is required" });
    }
    if (password == null) {
      return res.send({ error: "password is required" });
    }
    if (phone == null) {
      return res.send({ error: "phone is required" });
    }
    if (address == null) {
      return res.send({ error: "address is required" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        sucess: true,
        message: "User already exists",
      });
    }
    const hashedPassword = await authUtils.hashPassword(password);

    const user = await userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in Registration",
      error,
    });
  }
};

export default { userRegister };
