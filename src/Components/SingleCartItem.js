import React from "react";
import { CartState } from "../Context/Context";
import {GrSubtractCircle} from 'react-icons/gr'
import {MdAddCircleOutline} from "react-icons/md"
import { BiTrashAlt } from "react-icons/bi";
const SingleCartItem = ({ item }) => {
  const { dispatch } = CartState();
  const changeqty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };
  return (
    <div>
      <div
        className="py-[40px] flex md:flex-row items-center flex-1 flex-col"
        key={item.id}
      >
        <div className="md:w-[20%]">
          <img
            src={item.image}
            alt="product"
            className="md:w-[100px] w-[50px]"
          ></img>
        </div>
        <div className="mx-10 w-[40%]">
          <p className="text-center">{item.title}</p>
        </div>
        <div className="md:w-[20%]">
          <p>Rs.{item.price.toFixed(0)}</p>
        </div>
        {/* <select
          className="border-rounded px-2 py-2 "
          onChange={(e) => {
            dispatch({
              action: "CHANGE_CART_QTY",
              payload: {
                id: item.id,
                qty: 5,
              },
            });
            console.log(cart);
            console.log(item.id);
          }}
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> */}
       <div
          className="  w-[50px] flex items-center"
          onClick={() => changeqty(item.id, item.qty - 1)}
        >
          {/* MInus */}
          <GrSubtractCircle size={40}    /> 
         
         </div>
        <span className=" flex items-center border-2 my-2 px-4 py-2 border-black text-center mr-2">
          {" "}
          {item.qty}
        </span>
        <div
          className="  w-[50px]"
          onClick={() => changeqty(item.id, item.qty + 1)}
        >
          {/* MInus */}
          <MdAddCircleOutline size={40}    /> 
         
         </div>
        <div className="w-[20%] md:mx-[40px] mx-[50px] ml-10 flex items-center justify-center ">
          <BiTrashAlt
            size={40}
            style={{ textAlign: "center", width: "100%" }}
            onClick={() => {
              dispatch({
                type: "Remove_From_CART",
                payload: item,
              });
            }}
          ></BiTrashAlt>
        </div>
        <hr style={{ color: "red" }}></hr>
      </div>
    </div>
  );
};

export default SingleCartItem;
