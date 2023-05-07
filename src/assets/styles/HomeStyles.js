import styled from "styled-components";
import BannerBackgroundImage from '../images/slideBackground.png'

export const Container = styled.main`
width: 100%;
min-height: 100vh;
`;

export const NavbarHolder = styled.section`
    width: 100%;
`;

export const BannerHolder = styled.section`
    width: 100%;
    height: 80vh;
    background-image: url(${BannerBackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    
`;

export const InnerBannerHolder = styled.section`
padding-left: 100px;
margin-top: auto;
margin-bottom: auto;

.firstContent{
    width: 350px;
    padding-bottom: 20px;
}

.firstContent span{
    color: darkgreen;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 0.1em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.secondContent{
    width: 550px;
    padding-bottom: 20px;

}


.secondContent span{
    font-size: 0.8em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.buttonHolder button{
    /* border-radius: 20px;
    border: none; */
    width: 10em;
    height: 3em;
    border-radius: 20px;
    border: none;
    cursor:pointer;
    color: white;
    background-color: darkgreen;
}
`;

export const CategoriesHolderBelow = styled.section`
    width: 100%;
    height: 40vh;
    /* background-color: red; */
    display: flex;
    justify-content: center;
`;

export const InnerCategoriesHolderBelow = styled.section`
    width: 90%;
    height: 100%;
    /* background-color: pink; */
`;

export const ProductCard = styled.section`
   width: 100%;
   min-height: 40vh;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   margin-bottom: 5em;
   margin-top: 2.5em;
`;

export const ProductInnerCard = styled.div`
   width: 90%;
   height: 100%;
   /* background-color: green; */
  display: grid;
  column-gap: 1em;
  row-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(16rem,1fr));
`;

export const ProductCardHolder = styled.div`
width: 100%;
min-height: 300px;
background-color: rgb(191,191,191,0.3);
border-radius: 5px;

`;

export const ProductCardImageHolder = styled.div`
width: 100%;
height: 60%;
box-sizing: border-box;
border-top:  2px solid rgb(191,191,191);
border-right: 2px solid rgb(191,191,191);
border-left: 2px solid rgb(191,191,191);
border-top-right-radius: 5px;
border-top-left-radius: 5px;



img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;

}



`;

export const ProductCardContentHolder = styled.div`
width: 100%;
height: 40%;
display: flex;
flex-direction: column;
justify-content:space-between;


.titleAndPrice{

    display: flex;
    justify-content: space-between;
    padding: 0.3em;
   font-family: 'Times New Roman', Times, serif;
   padding-left: 1em;
   padding-top: 1.5em;

}

p{
  
    padding-left: 0.3em;
   font-family: 'Times New Roman', Times, serif;
}

.shortDesc{
    padding-left: 1em;

}
.rateIconAndCart .ratingIcons{
    padding-bottom: 0.5em;
}

.rateIconAndCart{
    margin-top: 0;
    margin-bottom: 1em;
    padding-left: 1em;

    /* background-color: brown; */
   
}

button{
    width: 8em;
    height: 2.5em;
       font-family: 'Times New Roman', Times, serif;
       font-weight: bold;
       border-radius: 20px;
       border: 1px solid black;
       cursor: pointer;
}

button:hover{
 background-color: green;
 color: white;
 border: none;

}

`;


export const OtherInformationHolder = styled.section`
   width: 100%;
   min-height: 50vh;
   display: flex;
   flex-direction: column;
   margin-bottom: 2.5em;
   
   h1{
    padding-left: 2.7em;
    padding-bottom: 1em;
   }
`;


export const FooterHolder = styled.footer`
   
  width: 100%;
  min-height: 50vh;
  background-color: rgba(236,236,236,0.2);
  border-top: 1px solid gray;
`;


