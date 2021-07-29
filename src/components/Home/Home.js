import React from "react";
import { Wrapper, Banner, HomeRow } from "../Home/Home.styles";
import Product from "../Product/Product";

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <HomeRow>
        <Product
        id="65768978"
          title="Crest 3D White Professional Effects Whitestrips 20 Treatments + Crest 3D White 1 Hour Express Whitestrips 2 Treatments - Teeth Whitening Kit"
          price={48.00}
          image="https://m.media-amazon.com/images/I/91l2Hzlu8zL._SL1500_.jpg"
          rating={4}
        />
        <Product
          id="65768909"
          title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | 19 Ounce"
          price={14.83}
          image="https://m.media-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg"
          rating={5}
        />
      </HomeRow>

      <HomeRow>
        <Product
          id="65587978"
          title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)"
          price={29.99}
          image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg"
          rating={4}
        />
        <Product
          id="657896978"
          title="Wage Universal Wired Gaming Headset - Black/Blue (WMANY-N116)"
          price={29.99}
          image="https://m.media-amazon.com/images/I/71rm6rY2VAL._AC_SL1500_.jpg"
          rating={5}
        />
        <Product
          id="65700078"
          title="Ergonomic Gaming Chair Racing Office Computer Chair High Back PU Leather Swivel Chair with Adjustable Massage Lumbar Support and Headrest"
          price={119.99}
          image="https://m.media-amazon.com/images/I/51UR5XMWuyL._AC_SL1000_.jpg"
          rating={4}
        />
      </HomeRow>

      <HomeRow>
        <Product
          id="657609778"
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
          price={2249.99}
          image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
          rating={5}
        />
      </HomeRow>
    </Wrapper>
  );
};

export default Home;
