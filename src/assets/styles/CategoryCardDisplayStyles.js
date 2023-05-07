import styled from "styled-components";

// export const Container = styled.div`
// display: flex;
// justify-content: space-between;
// `;

export const Card = styled.div`
    width: 200px;
    height: 200px;
    background-color: greenyellow;
    background-image: url(${props => props.cardBg});
  background-size: cover;
  background-position: center;
  border-radius:10px;

  p{
    text-align: center;
    padding-top: 1em;
    font-weight: 700;
    font-size:1.5em;
    color: yellow;
  }
`;