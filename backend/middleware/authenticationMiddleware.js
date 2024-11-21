import JWT from "jsonwebtoken";

const requireLoggedIn = (req, res, next) => {
  try {
    const token_decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    next();
  } catch (error) {
    console.log(error);
  }
};

export default requireLoggedIn;
