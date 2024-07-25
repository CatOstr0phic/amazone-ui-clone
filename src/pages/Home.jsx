import React from "react";
import "./home.css";
import Product from "../components/Product";
import { Products } from "../DUMMY_DATA"
import Slideshow from "../components/Slideshow";
export default function Home() {
  return (
    <div className="home">
      <div className="home__container">

        {/* <img
          src="/assets/mobile shop flex banner psd.PNG"
          alt=""
          className="home__image"
        /> */}

        <Slideshow />

        <div className="home__row">
           {Products.map((product) => (
            <Product key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            id={product.id}

            />
           ))}
        </div>
      </div>
    </div>
  );
}
