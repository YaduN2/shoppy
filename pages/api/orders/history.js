import axios from 'axios';
import { getSession } from 'next-auth/react';
import Order from '../../../models/Order';
import db from '../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({ message: 'signin required' });
  }
  const { user } = session;
  // await db.connect();
  // const orders = await Order.find({ user: user._id });
  // await db.disconnect();
  const result = await axios.post("http://localhost:8000/order/get-orders.php", {
    user_id: user._id
  })
  const orders = result.data.orders
  // console.log(orders)
  res.send(orders);
};

export default handler;
