import messages from "../utils/messages.js";

const userRegisterValidator = (req, res, next) => {
  const { name, email, password, phone, address } = req.body;

  if (name == null) {
    return res.send({ error: messages.NAME_REQUIRED });
  }
  if (email == null) {
    return res.send({ error: messages.EMAIL_REQUIRED });
  }
  if (password == null) {
    return res.send({ error: messages.PASSWORD_REQUIRED });
  }
  if (phone == null) {
    return res.send({ error: "Phone is required" });
  }
  if (address == null) {
    return res.send({ error: "address is required" });
  }
  next();
};

export default { userRegisterValidator };
