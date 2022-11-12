import axios from 'axios';
import { getSession } from 'next-auth/react';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signin required');
  }
  if (req.method === 'GET') {
    const result = await axios.post("http://localhost:8000/order/get-all.php");
    const orders = result.data.orders
    // await db.connect();
    // const orders = await Order.find({}).populate('user', 'name');
    // await db.disconnect();
    res.send(orders);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

export default handler;
