import React from "react";
import "./checkOut.css";
import { Link } from "react-router-dom";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../redux/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";

function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img src="/assets/ban27.jpg" alt="" className="checkout__ad" />
        </Link>

        <div className="">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* Checkout product */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
