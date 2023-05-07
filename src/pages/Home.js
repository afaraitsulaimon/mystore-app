import React, {useContext, useState} from "react";
import {
  Container,
  NavbarHolder,
  BannerHolder,
  InnerBannerHolder,
  CategoriesHolderBelow,
  InnerCategoriesHolderBelow,
  ProductCard,
  ProductCardHolder,
  ProductCardImageHolder,
  ProductCardContentHolder,
  ProductInnerCard,
  OtherInformationHolder,
  FooterHolder,
} from "../assets/styles/HomeStyles";
import Navbar from "../components/Navbar";
import CategoryCardDisplay from "../components/CategoryCardDisplay";
import { motion } from "framer-motion";
import { ProductContext } from "../context/ProductContext";
import {AiFillStar} from 'react-icons/ai'
import { Link } from "react-router-dom";
import OtherInformation from "../components/OtherInformation";
import Footer from "../components/Footer";
const Home = () => {

  const [products, setProducts] = useContext(ProductContext)
  return (
    <Container>
      <NavbarHolder>
        <Navbar />
      </NavbarHolder>

      <BannerHolder>
        <InnerBannerHolder>
          <div className="firstContent">
            <span>Shopping And Department Store</span>
          </div>
          <div className="secondContent">
            <span>
              Like to make more money while you shop? You are at the right place
              and be rest assured that we are here to serve you better and make your shopping experience a better one.
            </span>
          </div>
          <div className="buttonHolder">
            <button>Start Shopping</button>
          </div>
        </InnerBannerHolder>
      </BannerHolder>

    <CategoriesHolderBelow>
        <InnerCategoriesHolderBelow>
          <h2>Shop Our Top Categories</h2>


          <motion.div
    animate={{ opacity:1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition ={{ duration: 0.5 }}
    >
        
        <CategoryCardDisplay/>
    </motion.div>

        </InnerCategoriesHolderBelow>
    </CategoriesHolderBelow>

    <ProductCard>
            <h1>Products</h1>

      <ProductInnerCard>
      {products.map((product) => {

        //for displaying the rating
        //stored and empty array
          const ratingStarimages = [];

          // run a for loop , then 
          //push the star icon to the array
          for (let i = 0; i < product.rating; i++) {
            ratingStarimages.push(<AiFillStar color="green"/>);
          }

          // we used a slice to display it
          //so that it wil create a copy if the array
          //then start calling it from index of 0 , till the last index(product rating)

          //here is a better explanation of slice
         // const arr = [1, 2, 3, 4, 5];
// arr = [1, 2, 3, 4, 5]

//const newArr = arr.slice(0, 4);
// newArr = [1, 2, 3, 4]

// Note that the original array arr is not 
// modified by the slice method, and a new 
// array newArr is returned. Also note that the 
// second argument to the slice method is 
// exclusive, so the resulting array does not 
// include the element at index 4 (5 in this case).
          const displayedStarIcon = ratingStarimages.slice(0, product.rating);

      return(
       <ProductCardHolder key={product.id}>
        <ProductCardImageHolder>
          <Link><img src={product.productImages[0]} alt={product.title}/></Link>
        </ProductCardImageHolder>
        <ProductCardContentHolder>
          <div className="titleAndPrice">
          <span>{product.title}</span>
          <span>${product.productPrice}</span>
          </div>
        <span className="shortDesc">{product.shortDescription}</span>
        <div className="rateIconAndCart">
        <div className="ratingIcons">{displayedStarIcon}</div>
        <button>Add To Cart</button>

        </div>
       


        </ProductCardContentHolder>

       </ProductCardHolder>)
})}
      </ProductInnerCard>
    </ProductCard>

    <OtherInformationHolder>
    <h1>Services To Help You Shop</h1>

       <OtherInformation/>
    </OtherInformationHolder>

    <FooterHolder>
      <Footer/>

    </FooterHolder>
    </Container>
  );
};

export default Home;
