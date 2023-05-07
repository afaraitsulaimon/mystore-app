import React from 'react'
import {FooterContainer,
    LogoDisplay,
    ContentLinksHolder,
    AddressAndSocialHolder
} from '../assets/styles/FooterStyles'

import {FcShop} from "react-icons/fc"
import { Link } from 'react-router-dom'
import { AiFillFacebook,
   AiFillGoogleCircle, 
   
   AiFillHome, 
   
   AiFillInstagram, AiFillMessage, AiFillPhone, AiFillTwitterCircle, 
    } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <FooterContainer>
        <LogoDisplay>
        <div className='logoHolder'><FcShop className="shopLogo"/><span>CreamlaShop</span></div>

        </LogoDisplay>

        <ContentLinksHolder>
<h2>Information</h2>
<ul>
  <Link to='#'><li>About Us</li></Link>
    <Link to='#'><li>Contact Us</li></Link>
      <Link to='#'><li>Faq</li></Link>
  <Link to='#'><li>Return Policy </li></Link>
  <Link to='#'><li>Become a supplier </li></Link>
  <Link to='#'><li>Cookies Policy</li></Link>

</ul>
        </ContentLinksHolder>

        <AddressAndSocialHolder>
<div className='contactdetails'>
<h2>Contact Us</h2>
 <div className='address'>
  <span>Address <AiFillHome className='smallIcon' size='0.7em' color='#82d7ad'/>:</span>  <span>31, Benson Akinyele Street, Oke-Afa, Jakande Gate, Isolo, Lagos.</span>
 </div>
 <div className='emailAdd'>
  <span>Email <AiFillMessage className='smallIcon'  size='0.7em' color='blue'/>:</span>  <span>info@creamlashop.com</span>
 </div>
 <div className='phoneNo'>
  <span>Phone <AiFillPhone className='smallIcon'  size='0.7em' color='green'/>:</span>  <span>+2348032716181</span>
 </div>
</div>

<div className='socialDetails'>
  <h2>Join Us</h2>
  <ul>
    <li><AiFillFacebook className='facebook'/></li>
    <li><AiFillTwitterCircle className='twitter'/></li>
    <li><AiFillInstagram className='instagram'/></li>
    <li><AiFillGoogleCircle className='google'/></li>
  </ul>

</div>
        </AddressAndSocialHolder>
    </FooterContainer>
  )
}

export default Footer