import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";

export default function ShippingScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.street);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.pinCode);
    setValue("country", shippingAddress.state);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, street, city, pinCode, state }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, street, city, pinCode, state },
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          street,
          city,
          pinCode,
          state,
        },
      })
    );

    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl checkoutWizHeading">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Please enter full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="street">Street</label>
          <input
            className="w-full"
            id="street"
            {...register("street", {
              required: "Please enter street",
              // minLength: { value: 3, message: 'Address is more than 2 chars' },
            })}
          />
          {errors.street && (
            <div className="text-red-500">{errors.street.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            {...register("city", {
              required: "Please enter city",
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="pinCode">PIN Code</label>
          <input
            className="w-full"
            id="pinCode"
            {...register("pinCode", {
              required: "Please enter PIN code",
            })}
          />
          {errors.pinCode && (
            <div className="text-red-500 ">{errors.pinCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="state">State</label>
          <input
            className="w-full"
            id="state"
            {...register("state", {
              required: "Please enter state",
            })}
          />
          {errors.state && (
            <div className="text-red-500 ">{errors.state.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
