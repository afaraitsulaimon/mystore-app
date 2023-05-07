import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 20vh;
    background-color: grey;
`;

export const TopNavSection = styled.section`
    background-color: darkgreen;
   height: 20%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

export const TopNavSectionOne = styled.section`

   .phoneIcon{
    color: white;
   }

   span{
    color: white;
    padding-left: 0.5em;
    font-size: 0.7em;
   }
`;


export const TopNavSectionTwo = styled.section`
   width: 170px;
   font-size: 0.7em;
   display: flex;
   justify-content: space-between;
   color: white;

   a{
    color: white;
   }

`;


export const TopNavSectionThree = styled.section`
   display: flex;

   select{
    background-color: transparent;
    color: white;
    font-size: 0.7em;
border: none;
   }

   select:focus{
   outline: none;
   }

   select option {
  
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
}
`;

export const Menu = styled.section`
width: 100%;
height: 80%;
background-color: #ffffff;
display: flex;
justify-content: space-between;
align-items: center;

`;

export const LogoHolder = styled.div`
/* display: flex;
align-items: center;
height: 50%; */
cursor: pointer;
font-family: Georgia, 'Times New Roman', Times, serif;


.shopLogo{
   padding-left: 1em;
}

span{
   padding-left: 0.3em;
   font-weight: bold;

}
`;

export const MenuListHolder = styled.div`
display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      font-family: Georgia, 'Times New Roman', Times, serif;


   ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
   }

   ul li{
      list-style: none;
      cursor: pointer;
   }

   ul li a{
      text-decoration: none;
      color:black;
   }

   ul li a:hover{
      text-decoration: underline overline wavy brown;
      
   }
   

   ul li:nth-child(1) {
      display: flex;
      align-items: center;
   }

   ul li:nth-child(1) .arrowIcon {
    font-size: 1em;
    padding-top: 0.3em;
    padding-left: 0.3em;
   }
`;

export const SearchHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;


.inputCover{
   width: 350px;
   height: 2em;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 10px;
   border: 2px solid rgb(128,128,128,0.5);
;
   
}

.inputCover input[type='text']{
   width: 85%;
   height: 100%;
   box-sizing: border-box;
   border: none;
   padding-left: 0.7em;
  border-radius: 10px;
  color: rgb(128,128,128,0.5);

}

.inputCover input[type='text']:focus{
   outline: none;

}
.inputCover .searchIcon{
   padding-right: 1em;
   cursor: pointer;

}
`;




export const AccountCartHolder = styled.div`
display: flex;
width: 160px;
justify-content: space-between;
align-items: center;
font-family: Georgia, 'Times New Roman', Times, serif;

.acct {
  cursor: pointer;
}
.acct span{
   padding-left: 0.3em;
   font-size: 0.9em;

}


.acct .acctIcon{
  font-size: 1em;
}

.cart {
  cursor: pointer;
}

.cart .cartIcon{
  font-size: 1em;
}

.cart span{
   padding-left: 0.3em;
   font-size: 0.9em;
   padding-right: 0.7em;
   }
`;

