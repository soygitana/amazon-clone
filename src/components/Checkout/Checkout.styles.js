import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const CheckoutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  div {
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    display: flex;
    max-height: 120px;
  }
`;

export const Basket = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-right: 10px;
  padding: 15px;
  border-bottom: 1px solid lightgrey;
`;

export const CheckoutRight = styled.div`
  display: flex;
`;

export const Banner = styled.img.attrs({
  src: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/December2019/SVD/Storefront/_D14237430_SVD_Main_Banner_MOV-Updation_1500x350._CB447694845_.jpg",
})`
  max-height: 120px;
  width: 80%;
`;
