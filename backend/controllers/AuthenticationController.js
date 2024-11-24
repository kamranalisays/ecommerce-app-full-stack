import authenticationService from "../services/AuthenticationService.js";

const requireLoggedIn = async (req, res, next) => {
  try {
    const result = await authenticationService.requireLoggedIn(req, res, next);
    return result;
  } catch (error) {
    apiResponse(
      res,
      Codes.INTERNAL_SERVER_ERROR_500,
      false,
      Messages.INTERNAL_SERVER_ERROR_USER_REGISTERATION,
      error.message,
      error.stack
    );
  }
};

export default { requireLoggedIn };
