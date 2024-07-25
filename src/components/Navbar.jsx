import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () =>{
    setClick(true)
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container" onClick={handleClick}>
            <Link to='/'  className='navbar-logo'>
                Trvl
            </Link>
            <div className="meni-icon" >
                {click ? <ArrowForwardIosOutlinedIcon onClick={click(false)}/> : <MenuOutlinedIcon/>}
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
