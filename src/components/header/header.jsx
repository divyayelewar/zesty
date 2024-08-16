import React from 'react'
import './style.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom'

import { BsFillCartFill } from "react-icons/bs";
import { FiShoppingCart } from 'react-icons/fi'
import { FaRegUser,FaRegAddressBook  } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";``
import { RiLogoutBoxRLine } from "react-icons/ri";


const header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          Zesty

        </div>
        <div className="left_side">
          <div className="search">
            <input type="text" className="search_bar" placeholder='Search Delicious Food ' />
            <CiSearch className='search_icon' />
          </div>
        </div>
        <div className="left_menus">
          <div className="cart">
            <FiShoppingCart/>
          </div>
          <div className="profile">
            <div className="image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="" />
            </div>
         
          <div className="details">
            <div className="name">hii Divya</div>
             <div className="text">My Account</div>
          </div>
          
         <div className="account_box">
          <div className="list"><FaRegUser/> Profile</div>
          <div className="list"><LuClipboardList/>My Orders</div>
          <div className="list"><FaRegAddressBook />Saved Address</div>
          <div className="list"><FiShoppingCart />My Carts</div>
          <div className="list"><IoSettingsOutline />Settings</div>
          <div className="hr"></div>
          <div className="list orange"><RiLogoutBoxRLine/>Logout</div>
         </div>
          </div>
        </div>
        </div>
        </div>
  )
}
export default header