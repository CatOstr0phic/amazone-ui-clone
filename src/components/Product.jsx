import React from "react";
import "./product.css";
import { useStateValue } from "../redux/StateProvider";
import ImageZoomHover from "./ImageHoverZoom";



export default function Product({ id, title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket, ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },    
    });
  };
  return (
    <ImageZoomHover id={id}>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">ya
            <small>$</small>
            <strong>{price}</strong>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((__, i) => (
                  <p>*</p>
                ))}
            </div>
          </p>
        </div>
        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </ImageZoomHover>
  );
}

