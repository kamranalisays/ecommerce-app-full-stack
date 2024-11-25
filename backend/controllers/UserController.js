import userService from "../services/UserService.js";

const userRegister = async (req, res) => {
  try {
    const result = await userService.userRegister(req, res);
    return result;
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: Messages.INTERNAL_SERVER_ERROR_USER_REGISTERATION,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const result = await userService.userLogin(req, res);
    return result;
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: Messages.INTERNAL_SERVER_ERROR_USER_LOGIN,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

export default { userRegister, userLogin };
