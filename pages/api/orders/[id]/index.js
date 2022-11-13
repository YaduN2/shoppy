// /api/orders/:id
import axios from 'axios';
import { getSession } from 'next-auth/react';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  // await db.connect();
  const _id = req.query.id
  const result = await axios.post("http://localhost:8000/order/get-order.php", {
    _id
  })
  const order = result.data.order
  // console.log(order)

  // const order = await Order.findById(req.query.id);
  // await db.disconnect();
  res.send(order);
};

export default handler;
