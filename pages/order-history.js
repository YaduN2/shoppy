import axios from "axios";
import Link from "next/link";
import React, { useEffect, useReducer } from "react";
import Layout from "../components/Layout";
import { getError } from "../utils/error";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, orders: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
function OrderHistoryScreen() {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: "",
  });

  const getTotal = (ItemTotalPrice) => {
    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
    const price = round2(ItemTotalPrice);
    const shippingPrice = ItemTotalPrice > 200 ? 0 : 15;
    const taxPrice = round2(ItemTotalPrice * 0.15);
    const totalPrice =
      Math.round((price + shippingPrice + taxPrice) * 100) / 100;
    return totalPrice;
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/history`);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);
  return (
    <Layout title="Order History">
      <h1 className="mb-4 text-xl">Order History</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">ID</th>
                <th className="p-5 text-left">DATE</th>
                <th className="p-5 text-left">TOTAL</th>
                <th className="p-5 text-left">PAID</th>
                <th className="p-5 text-left">DELIVERED</th>
                <th className="p-5 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className=" p-5 ">{order._id}</td>
                  <td className=" p-5 ">{order.date}</td>
                  <td className=" p-5 ">₹{getTotal(order.total)}</td>
                  <td className=" p-5 ">
                    {/* {order.isPaid
                      ? `${order.paidAt.substring(0, 10)}`
                      : 'not paid'} */}
                    {"not paid"}
                  </td>
                  <td className=" p-5 ">
                    {/* {order.isDelivered
                      ? `${order.deliveredAt.substring(0, 10)}`
                      : 'not delivered'} */}
                    {"not delivered"}
                  </td>
                  <td className=" p-5 ">
                    <Link href={`/order/${order._id}`} passHref>
                      <a>Details</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}

OrderHistoryScreen.auth = true;
export default OrderHistoryScreen;
