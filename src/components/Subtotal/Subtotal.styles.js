import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 350px;
height: 150px;
padding: 20px;
background-color: #f3f3f3;
border: 1px solid #dddddd;
border-radius: 3px;


small {
display: flex;
align-items: center;
input { 
    margin-right: 5px;
}
}
`;

export const CheckoutButton = styled.button`
background-color: ${({ theme }) => theme.colors.orange};
width: 100%;
height: 30px;
border: 1px solid;
border-radius: 2px;
margin-top: 10px;
border-color: ${({ theme }) => theme.colors.orangeGradient};
font-size: 12px;
color: #111;
`;
