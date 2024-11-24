import userService from "../services/UserService.js";

const userRegister = (req, res) => {
  return userService.userRegister(req, res);
};

const userLogin = (req, res) => {
  return userService.userLogin(req, res);
};

export default { userRegister, userLogin };
