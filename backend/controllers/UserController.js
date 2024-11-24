import userService from "../services/UserService.js";

const userRegister = async (req, res) => {
  try {
    const result = await userService.userRegister(req, res);
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

const userLogin = async (req, res) => {
  try {
    const result = await userService.userLogin(req, res);
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

export default { userRegister, userLogin };
