import JWT from "jsonwebtoken";
import Codes from "../utils/Codes.js";
import CONSTANTS from "../utils/constants.js";
import messages from "../utils/messages.js";

const requireLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(Codes.OK_200).send({
        [CONSTANTS.success]: false,
        [CONSTANTS.message]: messages.UNAUTHORIZED_ACCESS_LOGIN_REQUIRED,
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
        [CONSTANTS.message]: messages.TOKEN_HAS_EXPIRED,
      });
    } else if (error instanceof JWT.JsonWebTokenError) {
      return res.status(Codes.OK_200).send({
        [CONSTANTS.success]: false,
        [CONSTANTS.message]: messages.INVALID_TOKEN,
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
