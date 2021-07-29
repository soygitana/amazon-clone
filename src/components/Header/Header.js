import React from "react";
import {
  Wrapper,
  Logo,
  SearchBar,
  Navigation,
  NavigationOption,
  Input,
  SearchIcon,
  ShoppingCart,
  Cart
} from "../Header/Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar>
        <Input type="text" />
        <SearchIcon />
      </SearchBar>
      <Navigation>
        <NavigationOption>
          <span>Hello, sign in</span>
          <span>Account & Lists</span>
        </NavigationOption>
        <NavigationOption>
          <span>Returns</span>
          <span>& Orders</span>
        </NavigationOption>
        <NavigationOption>
          <span>Your</span>
          <span>Prime</span>
        </NavigationOption>
        <ShoppingCart>
          <Link to="/checkout">
            <Cart />
          </Link>
          <p>0</p>
        </ShoppingCart>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
