import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import DropdownLink from "./DropdownLink";
import Image from "next/image";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const siteName = "Shoppy";
  const alfndansf = (
    <span>
      <span className="one transitionall">S</span>
      <span>
        <a
          href="https://www.linkedin.com/in/ans-baby-182731207"
          className="two transitionall"
        >
          h
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/nihal-e-484157215"
          className="thr transitionall"
        >
          o
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/aadharsh-k-xavier-4173b9204"
          className="for transitionall"
        >
          p
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/yadu-nandan-453b53219/"
          className="fiv transitionall"
        >
          p
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/livin-k-l-765685219"
          className="six transitionall"
        >
          y
        </a>
      </span>
    </span>
  );
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

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

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-white">
            <Link href="/">
              <a className="text-2xl font-bold text-black hover:text-green-300">
                {siteName}
              </a>
            </Link>
            <div className="flex">
              <Link href="/cart" passHref>
                <a className="flex p-2">
                  <span className="icon_cart">
                    <Image
                      width={20}
                      height={20}
                      src={"/images/shopping-cart.png"}
                      alt={"shopping-cart.png"}
                    ></Image>
                  </span>
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
                  <Menu.Button className="text-blue-600 ">
                    <span className="flex p-2">
                      {session.user.name}
                      <span className="icon_user">
                        <Image
                          width={20}
                          height={20}
                          src={"/images/user.png"}
                          alt={"name"}
                        ></Image>
                      </span>
                    </span>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
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
        <footer className="flex h-10 justify-center items-center shadow-inner bg-white">
          <p className="logo">{alfndansf} - A DBMS Project</p>
        </footer>
      </div>
    </>
  );
}
