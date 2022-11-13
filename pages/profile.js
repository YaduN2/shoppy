import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import axios from 'axios';
import Layout from '../components/Layout';

export default function ProfileScreen() {
  const { data: session } = useSession();

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  

  useEffect(() => {

    const getAndSetUser = async () => {
      const { data : user } = await axios.get(`/api/users/${session.user._id}`)
      setValue('username', user.username);
      setValue('email', user.email);
      setValue('fname', user.fname);
      setValue('lname', user.lname);
      setValue('mobile', user.mobile);
      setValue('city', user.city);
      setValue('state', user.state);
      setValue('pincode', user.pincode);
    }
    getAndSetUser();

    

  }, [session.user, setValue]);

  const submitHandler = async ({ username, email, password }) => {
    try {
      await axios.put('/api/auth/update', {
        username,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });
      toast.success('Profile updated successfully');
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Profile">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Update Profile</h1>

        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="w-full"
            id="username"
            autoFocus
            {...register('username', {
              required: 'Please enter username',
            })}
          />
          {errors.username && (
            <div className="text-red-500">{errors.username.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="w-full"
            id="fname"
            autoFocus
            {...register("fname", {
              required: "Please enter your first name",
            })}
          />
          {errors.fname && (
            <div className="text-red-500">{errors.fname.message}</div>
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
            className="w-full"
            id="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
          />
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
            className="w-full"
            type="password"
            id="password"
            {...register('password', {
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
          />
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
            {...register('confirmPassword', {
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message: 'confirm password is more than 5 chars',
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">Password do not match</div>
            )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Update Profile</button>
        </div>
      </form>
    </Layout>
  );
}

ProfileScreen.auth = true;
