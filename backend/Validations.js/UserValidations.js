const UserRegisterValidator = (req, res, next) => {
  const { name, email, password, phone, address } = req.body;

  if (name == null) {
    return res.send({ error: "Name is required" });
  }
  if (email == null) {
    return res.send({ error: "email is required" });
  }
  if (password == null) {
    return res.send({ error: "password is required" });
  }
  if (phone == null) {
    return res.send({ error: "phone is required" });
  }
  if (address == null) {
    return res.send({ error: "address is required" });
  }
  next();
};

export default { UserRegisterValidator };
