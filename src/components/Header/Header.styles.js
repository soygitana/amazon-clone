import styled from "styled-components";
import logo from "../../assets/img/amazon.jpg";

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
 object-fit: contain;
 margin: 0 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;


`;

export const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const NavigationOption = styled.div`
  width: 60px;
  height: 60px;
`;
