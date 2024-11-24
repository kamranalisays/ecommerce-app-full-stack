import authenticationService from "../services/AuthenticationService.js";

const requireLoggedIn = async (req, res, next) => {
  return authenticationService.requireLoggedIn(req, res, next);
};

export default { requireLoggedIn };
