import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CartReducer } from "./Reducer";
const Cart = createContext();
const Context = ({ children }) => {
  const [search, setsearch] = useState("");
  const [state, dispatch] = useReducer(CartReducer, {
    Products: [],
    cart: [],
    filtered: "",
  });

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      const data = res.data;
      dispatch({
        type: "ADD_PRODUCTS",
        payload: data,
      });
    }
    fetchdata();
  }, []);

  return (
    <div>
      <Cart.Provider value={{ state, dispatch, search, setsearch }}>
        {children}
      </Cart.Provider>
    </div>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
