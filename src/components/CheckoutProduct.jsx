import React from "react";
import "./checkoutPtoduct.css";
import { useStateValue } from "../redux/StateProvider";


export default function CheckoutProduct({ id, title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkout__product__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((__, i) => (
                <p>*</p>
              ))}
          </div>
        </p>
        <button onClick={removeFromBasket}> Remove from Basket</button>
      </div>
    </div>
  );
}
