import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";

import SingleCartItem from "./SingleCartItem";
const CartPage = () => {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, c) => Number(c.price.toFixed(0)) * c.qty + acc, 0)
    );
  }, [cart]);
  console.log(cart);
  return (
    <>
      {cart.length > 0 ? (
        <div className="flex flex-col justify-between  px-auto py-auto w-[90%] mx-auto my-auto">
          {cart.map((item) => (
            <SingleCartItem item={item} key={item.id}></SingleCartItem>
          ))}
          <div className="md:w-[30%] md:self-end md:mr-[18%] ">
            <hr
              className=" "
              style={{ backgroundColor: "black", height: "5px" }}
            />
            <div className="flex justify-between">
              <p className="mt-10 inline-block">Total</p>
              <span className="mt-10 font-bold">{total}</span>
            </div>
            <button className="bg-black px-20 py-2 my-10 rounded text-white block">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center font-bold my-10">Your Cart is Empty</h1>
      )}
    </>
  );
};

export default CartPage;
