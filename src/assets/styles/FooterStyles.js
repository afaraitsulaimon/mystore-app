import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const LogoDisplay = styled.div`
  width: 30%;
  min-height: 100%;
  /* background-color: orange; */

  .logoHolder {
    display: flex;
    margin: 1em 0 0 1em;
  }
  .logoHolder .shopLogo {
    font-size: 2em;
  }

  .logoHolder span {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

export const ContentLinksHolder = styled.div`
  width: 30%;
  min-height: 100%;
border-left: 1px solid gray;
  /* background-color: grey; */

  h2 {
    margin: 0;
    padding-left: 0.5em;
    padding-top: 1em;
  }

  ul li {
    list-style: none;
    color: black;
    font-weight: 500;
    margin: 1em;
  }

  ul a {
    text-decoration: none;
  }
`;

export const AddressAndSocialHolder = styled.div`
  width: 30%;
  min-height: 100%;
  /* background-color: green; */
  border-left: 1px solid gray;

  .contactdetails{
    width: 100%;
  }

  .contactdetails h2{
    padding-left: 0.5em;
  }
  .contactdetails .address{
    padding-left:2.5em;
    padding-bottom: 1em;
  }

  .contactdetails .address span:nth-child(1){
    font-size: 1em;
    font-weight: bold;
  }

  .contactdetails .address span:nth-child(1) .smallIcon{
    padding-right: 0.3em;
  }


  .contactdetails .address span:nth-child(2){
    padding-left: 0.5em;
  }
  .contactdetails .emailAdd{
    padding-left:2.5em;
    padding-bottom: 1em;

  }

  .contactdetails .emailAdd span:nth-child(1){
    font-size: 1em;
    font-weight: bold;
  }

  .contactdetails .emailAdd span:nth-child(1) .smallIcon{
    padding-right: 0.3em;
  }

  .contactdetails .emailAdd span:nth-child(2){
    padding-left: 2em;
  }

  .contactdetails .phoneNo{
    padding-left:2.5em;
    padding-bottom: 1em;

  }

  .contactdetails .phoneNo span:nth-child(1){
    font-size: 1em;
    font-weight: bold;
  }

  .contactdetails .phoneNo span:nth-child(1) .smallIcon{
    padding-right: 0.3em;
  }


  .contactdetails .phoneNo span:nth-child(2){
    padding-left: 1.5em;
  }


  .socialDetails {
    width: 100%;
  }

  .socialDetails h2{
    padding-left: 0.5em;
  }
  .socialDetails ul {
    display: flex;
    justify-content: space-between;
    margin-right: 3em;
  }

  .socialDetails ul li {
    list-style: none;
  }

  .socialDetails ul li .facebook {
    font-size: 2em;
    cursor: pointer;
    color: blue;
  }

  .socialDetails ul li .twitter {
    font-size: 2em;
    cursor: pointer;
    color: skyblue;

  }

  .socialDetails ul li .instagram {
    font-size: 2em;
    cursor: pointer;

  }

  .socialDetails ul li .google {
    font-size: 2em;
    cursor: pointer;

  }


`;
