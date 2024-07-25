import React, { Component } from "react";
import "./header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import { auth } from "../pages/firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAutentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        {/* Amazon's Logo */}
        <Link to="/">
          <div className="header__logo">
            <img
              src="/assets/amazon_PNG11.png"
              alt="#"
              style={{ width: "100%" }}
            />
          </div>
        </Link>

        {/* Header Search */}

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchOutlinedIcon
            style={{
              padding: "5px",
              height: "22px !important",
              backgroundColor: "#cd9042",
            }}
          />
        </div>

        {/* Nav */}

        <div className="header__nav">
          <Link to="/login">
            <div onClick={handleAutentication} className="header__option">
              <span className="header__optionLine">
                Hello, {!user ? "Guests" : user.emai}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Sign In"}
              </span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLine">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLine">Your </span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>

          <Link to="/check-out">
            <div className="header__basketOption">
              <ShoppingCartOutlinedIcon style={{ color: "white" }} />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

               <div className="subheader">
                 <span className="subheader__options">Order</span>
                 <span className="subheader__options">Delivery</span>
                 <span className="subheader__options">Payment Method</span>
                 <span className="subheader__options">Settings</span>
                 <span className="subheader__options">Language</span>
                 <span className="subheader__options">Quezes</span>
               </div>

    </>
  )
};
