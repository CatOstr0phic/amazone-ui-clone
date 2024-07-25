import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
    <hr />
    <div className='footer__content'>
       {/* Logo */}
       <Link to="/">
          <div className="footer__logo">
            <img
              src="/assets/amazon_PNG11.png"
              alt="#"
              style={{ width: "100%" }}
            />
          </div>
        </Link>
    {/* Copyright */}
    <p>Copyright @ 2023 HubSpot, Inc</p>
    {/* Links */}

    <div className="option__links">
      <span>Legaccy</span>
       <div className="line" />
      <span>Contact us</span>
      <div className="line" />
      <span>1st place</span>

    </div>
    </div></div>
  )
}

export default Footer
