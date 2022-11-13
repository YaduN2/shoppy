import axios from 'axios';
import { getSession } from 'next-auth/react';
import Order from '../../../models/Order';
import Product from '../../../models/Product';
import User from '../../../models/User';
import db from '../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  console.log(session);
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signin required');
  }

  // await db.connect();

  // const ordersCount = await Order.countDocuments();
  // const productsCount = await Product.countDocuments();
  // const usersCount = await User.countDocuments();

  const ordersCountResult = await axios.post("http://localhost:8000/utils/count-records.php", {
    tableName: "ORDERS"
  }) 

  const ordersCount = ordersCountResult.data.count;

  const productsCountResult = await axios.post("http://localhost:8000/utils/count-records.php", {
    tableName: "PRODUCT"
  }) 

  const productsCount = productsCountResult.data.count;

  const usersCountResult = await axios.post("http://localhost:8000/utils/count-records.php", {
    tableName: "CUSTOMER"
  }) 

  const usersCount = usersCountResult.data.count;

  // const ordersPriceGroup = await Order.aggregate([
  //   {
  //     $group: {
  //       _id: null,
  //       sales: { $sum: '$totalPrice' },
  //     },
  //   },
  // ]);
  const ordersPriceResult = await axios.get("http://localhost:8000/utils/total-sales.php")
  const ordersPrice = ordersPriceResult.data.ordersPrice

  // const salesData = await Order.aggregate([
  //   {
  //     $group: {
  //       _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
  //       totalSales: { $sum: '$totalPrice' },
  //     },
  //   },
  // ]);

  // await db.disconnect();
  // res.send({ ordersCount, productsCount, usersCount, ordersPrice, salesData });
  res.send({ ordersCount, productsCount, usersCount, ordersPrice});

};

export default handler;
