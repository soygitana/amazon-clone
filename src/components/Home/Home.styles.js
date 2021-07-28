import styled from "styled-components";
import banner from "../../assets/img/banner.jpg";

export const Wrapper = styled.div`
/* width: 100%; */
display: flex;
justify-content: center;
flex-direction: column;
max-width: 1500px;
margin-left: auto;
margin-right: auto;
background-color: ${({ theme }) => theme.colors.grey};
`;

export const Banner = styled.img.attrs({
    src: `${banner}`,
  })`
  width: 100%;
  margin-bottom: -300px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

  `;
  

  export const HomeRow = styled.div`
  display: flex;
 z-index: 1;
 margin-left: 5px;
 margin-right: 5px;
justify-content: center;
  `;





 