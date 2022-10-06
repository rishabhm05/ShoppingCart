import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { CartState } from "../Context/Context";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const {
    state: { cart },
  } = CartState();

  return (
    <>
      {/* <GiHamburgerMenu
        className="mx-2 my-10 absolute md:hidden"
        size={40}
      ></GiHamburgerMenu> */}
      <div className="md:flex md:justify-between my-5 md:mx-16 items-center justify-start mx-2">
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
              <a href="/" className="md:px-5 font-bold text-black  ">
                SIGN IN
              </a>
            </li>
            <li>
              <a href="/" className="font-bold text-black py-2">
                REGISTER
              </a>
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
    </>
  );
};

export default Header;
