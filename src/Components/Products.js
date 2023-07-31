import React, { useState } from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const {
    dispatch,
    search,
    state: { Products, filtered,pricehightolow },
  } = CartState();
  console.log(search);
  const[filterprice ,setfilterprice] =useState("High");
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
    } 
    if(pricehightolow==="low"){
      
     filteredproducts= filteredproducts.sort((a,b)=> a.price-b.price)
    }
    if(pricehightolow==="high"){
      filteredproducts= filteredproducts.sort((a,b)=> b.price-a.price)
    }
    
    return filteredproducts;
  };
  console.log(pricehightolow)
  const handlepricefilter =(e)=>{
   console.log("yes")
   console.log(e.target.value)
   if(e.target.value==="high"){
    // let products =transformProducts();
    // products.sort((a,b)=> a.price-b.price)
    // console.log(products)
    dispatch({
      type:"high",
      payload:"high"
    })
   }
   if(e.target.value==="low"){
    dispatch({
      type:"low",
      payload:"low"
    })
   }
   
  }
  return (
    <div>
      <h1 className="md:text-center font-bold text-4xl my-10 mx-8 text-center">Products</h1>
      <div>
        <form className="md:text-center my-10 px-3 mx-2 text-center">
          <div className="flex flex-col items-start items-center justify-center md:flex-row ">
          <label className="px-3 text-3xl font-bold my-3 text-center" >Categories</label>
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
          <label className="px-3 text-3xl font-bold my-3 text-center" >Price</label>
          <select onChange={handlepricefilter} className=" border-rounded px-2 py-2">
           
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
          </div>
        </form>
        <br></br>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-3 md:ml-20 mx-5  justify-center items-center">
  {transformProducts().map((product) => (
    <div key={product.id} className="flex flex-col justify-center h-full w-[100%]">
      <SingleProduct product={product} />
    </div>
  ))}
</div>
    </div>
  );
};

export default Products;
