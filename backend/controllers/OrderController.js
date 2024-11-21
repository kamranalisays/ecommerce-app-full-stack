import Order from "../models/Order.js";

const submitOrder = async (req, res) => {
  const order = new Order({
    totalCost: 500,
    orderDate: new Date(),
  });

  await order.save();

  return res.status(200).send({
    sucess: true,
  });
};

const getAllOrders = async (req, res) => {
  const order = new Order({});

  return res.status(200).send({
    sucess: true,
    orders,
  });
};

export default { submitOrder, getAllOrders };
