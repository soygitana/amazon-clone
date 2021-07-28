import React from "react";
import {
  Wrapper,
  Logo,
  SearchBar,
  Navigation,
  NavigationOption,
  Input,
  SearchIcon,
  ShoppingCart
} from "../Header/Header.styles";


const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <SearchBar>
        <Input type="text"/> 
        <SearchIcon/>
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
        <NavigationOption>
         <ShoppingCart/>
         <p>0</p>
        </NavigationOption>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
