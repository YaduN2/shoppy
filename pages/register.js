import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      // console.log(val)
      const result = await signIn("credentials", {
        redirect: false,
        name,
        password,
      });

      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Create Account">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-2xl font-bold">Create Account</h1>
        <div className="mb-4">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            {...register("name", {
              required: "Please enter your first name",
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="w-full"
            id="lname"
            autoFocus
            {...register("lname", {
              required: "Please enter your last name",
            })}
          />
          {errors.lname && (
            <div className="text-red-500">{errors.lname.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
            className="w-full"
            id="email"
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="w-full"
            id="mobile"
            autoFocus
            {...register("mobile", {
              required: "Please enter mobile no",
            })}
          />
          {errors.mobile && (
            <div className="text-red-500">{errors.mobile.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="w-full"
            id="city"
            autoFocus
            {...register("city", {
              required: "Please enter your city",
            })}
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="w-full"
            id="state"
            autoFocus
            {...register("state", {
              required: "Please enter your state",
            })}
          />
          {errors.state && (
            <div className="text-red-500">{errors.state.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            className="w-full"
            id="pincode"
            autoFocus
            {...register("pincode", {
              required: "Please enter your pincode",
            })}
          />
          {errors.pincode && (
            <div className="text-red-500">{errors.pincode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Please enter confirm password",
              validate: (value) => value === getValues("password"),
              minLength: {
                value: 6,
                message: "confirm password is more than 5 chars",
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <div className="text-red-500 ">Password do not match</div>
            )}
        </div>

        <div className="mb-4 ">
          <button className="primary-button">Register</button>
        </div>
        <div className="mb-4 ">
          Have have an account? &nbsp;
          <Link href={`/login`}>Log In</Link>
        </div>
      </form>
    </Layout>
  );
}
