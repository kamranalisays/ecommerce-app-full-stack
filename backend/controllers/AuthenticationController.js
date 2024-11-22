import JWT from "jsonwebtoken";

const requireLoggedIn = (req, res, next) => {
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

    const token_decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      error: "Unauthorized Access",
      message: "Invalid or expired token",
    });
  }
};

export default { requireLoggedIn };
