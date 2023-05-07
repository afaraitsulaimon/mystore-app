import React from "react";
import {
  Container,
  TopNavSection,
  Menu,
  TopNavSectionOne,
  TopNavSectionTwo,
  TopNavSectionThree,
  LogoHolder,
  MenuListHolder,
  SearchHolder,
  AccountCartHolder,
  
} from "../assets/styles/NavbarStyles";

import { BsTelephone, BsCart4 } from "react-icons/bs";
import {FcShop} from "react-icons/fc"
import {IoIosArrowDown} from 'react-icons/io'
import { Link } from "react-router-dom";
import {FiSearch} from "react-icons/fi"
import {BiUser} from "react-icons/bi"

const Navbar = () => {
  return (
    <Container>
      <TopNavSection>
        <TopNavSectionOne>
          <BsTelephone className="phoneIcon" size='0.8em' /> 
          <span>+08032716181</span>
        </TopNavSectionOne>
        <TopNavSectionTwo>
          <span>Buy one Get one Free</span>
          <span>|</span>
          <Link to="/">Shop Now</Link>
        </TopNavSectionTwo>
        <TopNavSectionThree>
          <select>
            <option>English</option>
            <option>Yoruba</option>
            <option>Igbo</option>
            <option>Hausa</option>
          </select>

          <select>
            <option>Location</option>
            <option>Lagos</option>
            <option>Imo</option>
            <option>Kaduna</option>
          </select>
        </TopNavSectionThree>
      </TopNavSection>

      <Menu>
        <LogoHolder><FcShop className="shopLogo"/><span>CreamlaShop</span></LogoHolder>

        <MenuListHolder>
            <ul>
                <li><span>Shop</span> <IoIosArrowDown className="arrowIcon"/> </li>
                <li><Link to='/'>Deals</Link></li>
                <li><Link to='/'>What's New</Link></li>
                <li><Link to='/'>Delivery</Link></li>
            </ul>
        </MenuListHolder>

        <SearchHolder>
            <div className="inputCover">
                <input type="text" placeholder="Search Product"/>
                <FiSearch className="searchIcon"/>
            </div>
        </SearchHolder>

        <AccountCartHolder>
            <div className="acct"><BiUser className="acctIcon"/><span>Account</span></div>
            <div className="cart"><BsCart4 className="cartIcon"/><span>Cart</span></div>

        </AccountCartHolder>
      </Menu>


    
    </Container>
  );
};

export default Navbar;
