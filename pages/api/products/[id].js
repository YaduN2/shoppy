// import Product from '../../../models/Product';
// import db from '../../../utils/db';

import axios from "axios";

const handler = async (req, res) => {
  // await db.connect();
  // const product = await Product.findById(req.query.id);
  // await db.disconnect();
  const _id = req.query.id;
  const result = await axios.post("http://localhost:8000/product/get-product.php", {_id});
  const product = result.data.product;
  res.send(product);
};

export default handler;
