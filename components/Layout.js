import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropDownLink from "./DropDownLink";
import Cookies from "js-cookie";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const siteName = "Shoppy";
  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <Head>
        <title>{title ? title + ` - ${siteName}` : `${siteName}`}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1}></ToastContainer>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">{siteName}</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-red-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="abosolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Item>
                      <DropDownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropDownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropDownLink
                        onClick={logoutClickHandler}
                        className="dropdown-link"
                        href="/#"
                      >
                        Logout
                      </DropDownLink>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>{siteName} - DBMS project 2022</p>
        </footer>
      </div>
    </>
  );
}
