import React from "react";
import { CartState } from "../Context/Context";

const SingleProduct = ({ product }) => {
  const {
    dispatch,
    state: { cart },
  } = CartState();

  return (
    <div className="md:w-[25%] mx-3 my-3 flex flex-col h-100 w-[100%]">
      <div>
        <img src={product.image} alt="productimage" className="w-[150px]"></img>
      </div>
      <div>
        <p>{product.title}</p>
        <p>Rs. {product.price.toFixed(0)}</p>
      </div>
      <div>
        {cart.some((prod) => prod.id === product.id) ? (
          <button
            className="bg-black text-white px-4 py-2 rounded my-4"
            onClick={() => {
              dispatch({
                type: "Remove_From_CART",
                payload: product,
              });
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="bg-black text-white px-4 py-2 rounded my-4"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
