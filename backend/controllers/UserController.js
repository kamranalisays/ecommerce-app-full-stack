import User from "../models/User.js";
import authUtils from "../utils/AuthUtils.js";
import JWT from "jsonwebtoken";
import Messages from "../utils/messages.js";
import Codes from "../utils/Codes.js";

const userRegister = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        sucess: true,
        message: Messages.USER_ALREAD_EXISTS,
      });
    }
    const hashedPassword = await authUtils.hashPassword(password);

    const user = await User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: Messages.USER_REGISTERED_SUCCESSFULLY,
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
        message: Messages.INVALID_EMAIL_AND_PASSWORD,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: Messages.EMAIL_NOT_REGISTERED,
      });
    }
    const passMatch = await authUtils.comparePassword(password, user.password);
    if (!passMatch) {
      return res.status(200).send({
        sucess: false,
        message: Messages.INVALID_PASSWORD,
      });
    }

    //
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    return res.status(200).send({
      sucess: true,
      message: Messages.MESSAGE_LOGIN_SUCCESSFULLY,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      sucess: false,
      message: Messages.INTERNAL_SERVER_ERROR_LOGIN,
      error,
    });
  }
};

export default { userRegister, userLogin };
