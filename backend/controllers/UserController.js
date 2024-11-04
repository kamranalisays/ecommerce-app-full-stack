import userModel from "../models/userModel.js";
import authUtils from "../utils/authUtils.js";
import JWT from "jsonwebtoken";

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

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        sucess: false,
        message: "Invalid email and password",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: "Email NO Registered..!",
      });
    }
    const passMatch = await authUtils.comparePassword(password, user.password);
    if (!passMatch) {
      return res.status(200).send({
        sucess: false,
        message: "Invalid password",
      });
    }

    //
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    return res.status(200).send({
      sucess: true,
      message: "Login Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in Login",
      error,
    });
  }
};

export default { userRegister, userLogin };
