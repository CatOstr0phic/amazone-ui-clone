import React, { useEffect, useRef, useState } from "react";
import "./slideshow.css";
import { BannerSlide }  from "../DUMMY_DATA";

const delay = 5500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === BannerSlide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshow__slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {BannerSlide.map((banner) => (
          <img
            className="slide"
            alt=""
            key={banner.id}
            src={banner.image}
            id={banner.id}
          ></img>
        ))}
      </div>
      {/* <div className="slideshow__dots">
        {colors.map((_, idx) => (
            <div key={idx} 
            className={`slideshow__dot${index === idx ? " active" : ""}`}
            onClick={() => {
                setIndex(idx);
              }}></div>
        ))}</div>                 */}
    </div>
  );
}

export default Slideshow;
