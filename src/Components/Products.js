import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const {
    dispatch,
    search,
    state: { Products, filtered },
  } = CartState();
  console.log(search);
  const transformProducts = () => {
    let filteredproducts = Products;
    if (filtered === "mens") {
      filteredproducts = filteredproducts.filter(
        (prod) => prod.category === "men's clothing"
      );
    } else if (filtered === "women") {
      filteredproducts = filteredproducts.filter(
        (prod) => prod.category === "women's clothing"
      );
    } else if (filtered === "electronics") {
      filteredproducts = filteredproducts.filter(
        (prod) => prod.category === "electronics"
      );
    } else if (filtered === "jewelery") {
      filteredproducts = filteredproducts.filter(
        (prod) => prod.category === "jewelery"
      );
    } else if (filtered === "") {
      return filteredproducts;
    }

    return filteredproducts;
  };
  return (
    <div>
      <h1 className="md:text-center font-bold text-4xl my-10 mx-8">Products</h1>
      <div>
        <form className="md:text-center my-10 px-3 mx-2">
          <label className="px-3 text-3xl font-bold my-3">Categories</label>
          <select
            className=" border-rounded px-2 py-2"
            onChange={(e) => {
              if (e.target.value === "Men's Clothing") {
                dispatch({
                  type: "MensClothing",
                  payload: "mens",
                });
              } else if (e.target.value === "Women's Clothing") {
                dispatch({
                  type: "WomensClothing",
                  payload: "women",
                });
              } else if (e.target.value === "Electronics") {
                dispatch({
                  type: "Electronics",
                  payload: "electronics",
                });
              } else if (e.target.value === "Jewelery") {
                dispatch({
                  type: "jewelery",
                  payload: "jewelery",
                });
              } else {
                dispatch({
                  type: "",
                  payload: "",
                });
              }
            }}
          >
            <option value=""></option>
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="Women's Clothing">Women's Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Jewelery">Jewelery</option>
          </select>
        </form>
        <br></br>
      </div>
      <div className="flex items-center md:justify-between md:mx-20 flex-wrap justify-center mx-5">
        {transformProducts().map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
