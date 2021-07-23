import React from "react";
import {
  Wrapper,
  Logo,
  SearchBar,
  Navigation,
  NavigationOption,
  SearchIcon
} from "../Header/Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <SearchBar>
        <input type="text"/> 
      </SearchBar>
      <Navigation>
        <NavigationOption>
          <span>Hello</span>
          <span>Sign in</span>
        </NavigationOption>
        <NavigationOption>
          <span>Returns</span>
          <span>& Orders</span>
        </NavigationOption>
        <NavigationOption>
          <span>Your</span>
          <span>Prime</span>
        </NavigationOption>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
