import React, { useState } from "react";

function ImageHoverZoom({ children }) {
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOver = () => {
    mouseOver ? setMouseOver(false) : setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(true);
  };
  return (
    <div
      onMouseOut={handleMouseOver}
      onMouseOver={handleMouseOut}
      style={
        mouseOver
          ? {
              transform: "scale(1.05)",
              overflow: "hidden",
              boxShadow:
                "inset 5px -5px 10px #aaaaaa, inset -5px 5px 10px #ffffff;",
                height: "fit-content"
            }
          : { transform: "scale(1)", 
              overflow: "hidden",
              height: "fit-content"  }
      }
    >
      {children}
    </div>
  );
}

export default ImageHoverZoom;
