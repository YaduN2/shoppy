import axios from 'axios';
import { getSession } from 'next-auth/react';
import Order from '../../../models/Order';
import db from '../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  const { user } = session;
  // await db.connect();
  // const newOrder = new Order({
  //   ...req.body,
  //   user: user._id,
  // });

  // const order = await newOrder.save();
  const {orderItems, shippingAddress, totalPrice } = req.body;
  let orderList = [];
  orderItems.map((orderItem) => {
      const OrderListItem = {
          product_id: orderItem._id,
          quantity: orderItem.quantity,
      }
      orderList.push(OrderListItem);
  });
  // console.log(cartItems);
  // console.log(orderItems);
  const result = await axios.post("http://localhost:8000/order/add-order.php", {
    orderList,
    shippingAddress,
    total: totalPrice,
    user_id: user._id
  });
  const order = result.data.order
  res.status(201).send(order);
};
export default handler;
