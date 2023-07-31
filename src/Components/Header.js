import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartState } from "../Context/Context";

import {GiHamburgerMenu} from "react-icons/gi"
import {CgShoppingCart} from "react-icons/cg"
import {ImCross} from "react-icons/im"
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const {
    state: { cart },
  } = CartState();
  const [menutoggle,setmenutoggle] =useState(false);
  return (
    <>
      {/* <GiHamburgerMenu
        className="mx-2 my-10 absolute md:hidden"
        size={40}
      ></GiHamburgerMenu> */}
      <div className="md:flex md:justify-between my-5 md:mx-16 items-center justify-start mx-2 hidden">
        <h1
          className="text-black font-bold text-3xl md:flex-1 md:px-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Fashion<span>.</span>
        </h1>

        {/* {useLocation().pathname.split("/")[1] !== "cart" && (
        <input
          type="search"
          placeholder="Search Products "
          className="flex-[0.25] px-4"
          onChange={(e) => setsearch(e.target.value)}
        ></input>
      )} */}

        <div className="md:flex  md:flex-1 justify-between">
          <ul className=" my-10 md:flex md:flex-1 justify-end mr-4 md:items-center md:my-0 ">
            <li>
              <Link to="/" className="md:px-5 font-bold text-black  ">
                SIGN IN
              </Link>
            </li>
            <li>
              <Link to="/" className="font-bold text-black py-2">
                REGISTER
              </Link>
            </li>
          </ul>
          <div className="absolute top-[3%] left-[80%] md:relative  md:left-[0px]">
            <FaCartPlus
              className="md:mr-10 cursor-pointer mx-5"
              size={30}
              onClick={() => navigate("/cart")}
            />
            <span className="absolute bottom-5 left-7  border rounded-full px-2 border-black">
              {cart.length}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-start justify-between mt-2 md:hidden">
      <h1
          className="text-black font-bold text-2xl  cursor-pointer"
          onClick={() => navigate("/")}
        >
          Fashion<span>.</span>
        </h1>
        <div className=" ">
            <CgShoppingCart
              className=" relative mr-12 cursor-pointer "
              size={40}
              
              onClick={() => navigate("/cart")}
             
            > <span className="absolute top-4 bottom-6 right-[47%]  px-1 border-black">
            {cart.length}
          </span></CgShoppingCart>
          
          </div>
        <div className="flex flex-col  ">
       {!menutoggle? (<GiHamburgerMenu
        className="md:hidden"
        size={40} 
        onClick={()=>setmenutoggle(!menutoggle)}
      ></GiHamburgerMenu>):(<ImCross size={40} onClick={()=>setmenutoggle(!menutoggle)}/>)}
{/* {menutoggle&&
<div>
        <ul>
          <li className="my-2 ">
        <Link to="/" className=" font-bold  text-sm  ">
                SIGN IN
              </Link>
            </li>
            <li className="my-2 ">
        <Link to="/" className=" font-bold  text-sm  ">
                Register
              </Link>
            </li>
        </ul>
       
          </div>
} */}
      </div>
      </div>
    </>
  );
};

export default Header;
