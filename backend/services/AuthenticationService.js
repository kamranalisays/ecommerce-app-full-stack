import JWT from "jsonwebtoken";
import Codes from "../utils/Codes.js";
import CONSTANTS from "../utils/constants.js";
import messages from "../utils/messages.js";

const requireLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      // Redirect to login page if no token is found
      // return res.redirect("/login");

      res.status(401).send({
        sucess: false,
        error: "Unauthorized Access",
        message: "Please login to access this page",
      });
    }

    const token_decode = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    next();
  } catch (error) {
    console.log(error);

    if (error instanceof JWT.TokenExpiredError) {
      return res.status(Codes.OK_200).send({
        [CONSTANTS.success]: false,
        [CONSTANTS.message]: "Token has expired!",
      });
    } else if (error instanceof JWT.JsonWebTokenError) {
      return res.status(Codes.OK_200).send({
        [CONSTANTS.success]: false,
        [CONSTANTS.message]: "Invalid token!",
      });
    } else {
      return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
        [CONSTANTS.success]: false,
        [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_USER_AUTHENTICATION,
        [CONSTANTS.errorMessage]: error.message,
        [CONSTANTS.errorStack]: error.stack,
      });
    }
  }
};

export default { requireLoggedIn };
