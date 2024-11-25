import authenticationService from "../services/AuthenticationService.js";
import Codes from "../utils/Codes.js";
import CONSTANTS from "../utils/constants.js";
import messages from "../utils/messages.js";

const requireLoggedIn = async (req, res, next) => {
  try {
    const result = await authenticationService.requireLoggedIn(req, res, next);
    return result;
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_USER_AUTHENTICATION,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

export default { requireLoggedIn };
