import User from "../models/User.js";
import authUtils from "../utils/AuthUtils.js";
import JWT from "jsonwebtoken";
import Messages from "../utils/messages.js";
import Codes from "../utils/Codes.js";
import CONSTANTS from "../utils/constants.js";
import { apiResponse } from "../response/ApiResponse.js";

const userRegister = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return apiResponse(res, Codes.OK_200, false, Messages.USER_ALREAD_EXISTS);
    }
    const hashedPassword = await authUtils.hashPassword(password);

    const user = await User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    return apiResponse(
      res,
      Codes.CREATED_201,
      true,
      Messages.USER_REGISTERED_SUCCESSFULLY
    );
  } catch (error) {
    console.log(error);

    return apiResponse(
      res,
      Codes.INTERNAL_SERVER_ERROR_500,
      false,
      Messages.INTERNAL_SERVER_ERROR_USER_REGISTERATION,
      error.message,
      error.stack
    );
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return apiResponse(
        res,
        Codes.BAD_REQUEST_400,
        false,
        Messages.INVALID_EMAIL_AND_PASSWORD
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return apiResponse(
        res,
        Codes.NOT_FOUND_404,
        false,
        Messages.EMAIL_NOT_REGISTERED
      );
    }
    const passMatch = await authUtils.comparePassword(password, user.password);
    if (!passMatch) {
      return apiResponse(res, Codes.OK_200, false, Messages.INVALID_PASSWORD);
    }

    //
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    return res.status(200).send({
      [CONSTANTS.success]: true,
      [CONSTANTS.message]: Messages.MESSAGE_LOGIN_SUCCESSFULLY,
      user,
      token,
    });
  } catch (error) {
    console.log(error);

    return apiResponse(
      res,
      Codes.INTERNAL_SERVER_ERROR_500,
      false,
      Messages.INTERNAL_SERVER_ERROR_USER_REGISTERATION,
      error.message,
      error.stack
    );
  }
};

export default { userRegister, userLogin };
