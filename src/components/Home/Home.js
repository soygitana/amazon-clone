import React from "react";
import {
    Wrapper,
    Banner,
    HomeRow
  } from "../Home/Home.styles";
  import Product from "../Product/Product";

const Home = () => {
  return (
<Wrapper>
    <Banner/>
    
  
<HomeRow>
<Product/>
<Product/>
</HomeRow>

<HomeRow>
<Product/>
<Product/>
<Product/>
</HomeRow>

<HomeRow>
<Product/>
</HomeRow>


</Wrapper>


  );
};

export default Home;
