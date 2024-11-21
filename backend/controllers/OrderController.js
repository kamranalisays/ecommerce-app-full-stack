import Order from "../models/Order.js";

const submitOrder = async (req, res) => {
  return res.status(200).send({
    sucess: true,
  });
};

const getAllOrders = async (req, res) => {
  const order = await Order.find({});

  return res.status(200).send({
    sucess: true,
    order,
  });
};

export default { submitOrder, getAllOrders };
