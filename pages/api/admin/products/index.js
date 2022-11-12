import axios from 'axios';
import { getSession } from 'next-auth/react';
// import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('admin signin required');
  }
  // const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const postHandler = async (req, res) => {
  // await db.connect();
  // const newProduct = new Product({
  //   name: 'sample name',
  //   // slug: 'sample-name-' + Math.random(),
  //   image: '/images/shirt1.jpg',
  //   price: 0,
  //   category: 'sample category',
  //   brand: 'sample brand',
  //   stock: 0,
  //   description: 'sample description',
  //   // rating: 0,
  //   // numReviews: 0,
  // });

  // const product = await newProduct.save();
  // await db.disconnect();
  const newProduct = {
    name: 'sample name',
    image: '/images/shirt1.jpg',
    price: 0,
    category: 'sample category',
    brand: 'sample brand',
    stock: 0,
    description: 'sample description',
  }

  const result = await axios.post("http://localhost:8000/product/add-product.php",newProduct);
  const product = result.data.product;
  res.send({ message: 'Product created successfully', product });
};
const getHandler = async (req, res) => {
  // await db.connect();
  // const products = await Product.find({});
  // await db.disconnect();
  const result = await axios.post("http://localhost:8000/product/get-all.php");
  const products = result.data.products;
  res.send(products);
};
export default handler;
