import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
// import Product from '../../models/Product';
import { Store } from "../../utils/Store";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.stock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/" passHref>
          <button className="button-28 shadow-2xl" role="button">
            Back to Home
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div className="product_details">
          <div>
            <div className="card_product_details">
              <ul>
                <li className="text-lg product_name">{product.name}</li>
                <li className="description_product">
                  <span>{product.description}</span>
                </li>
                <li className="flex justify-between brand_name">
                  <span>Brand</span>
                  <span>{product.brand}</span>
                </li>
                <li className="flex justify-between category_name">
                  <span>Category</span>
                  <span>{product.category}</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>₹{product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.stock > 0 ? "In stock" : "Unavailable"}
                </div>
              </div>
              <button
                className="primary-button w-full"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  // await db.connect();
  // const product = await Product.findOne({ slug }).lean();
  // await db.disconnect();
  const result = await axios.post(
    "http://localhost:8000/product/get-product.php",
    { _id: id }
  );
  const product = result.data.product;
  return {
    props: {
      product: product ? product : null,
    },
  };
}
