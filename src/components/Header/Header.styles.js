import styled from "styled-components";
import logo from "../../assets/img/amazon.jpg";
import { Search } from "@styled-icons/material";
import {ShoppingBag} from "@styled-icons/material";

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
  margin: 0 10px;
`;

export const SearchBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Input = styled.input`
  height: 35px;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 5px;
`;

export const SearchIcon = styled(Search)`
  height: 35px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0 5px 5px 0;
  margin-left: -5px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavigationOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  font-size: 12px;

  span:nth-last-of-type(1) {
    font-weight: 700;
    font-size: 13px;
  }

  &:nth-last-of-type(1) {
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 13px;
  }
`;

export const ShoppingCart = styled(ShoppingBag)`
height: 35px;
  padding: 5px;
  color: white;
`;
