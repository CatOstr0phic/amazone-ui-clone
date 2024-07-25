import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const STYLES = ["btn--ptimary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" classname="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>

      <Button>Get Started</Button>
    </Link>
  );
}
