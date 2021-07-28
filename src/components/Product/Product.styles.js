import styled from "styled-components";



export const ProductItem = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: column;
margin: 10px;
padding: 20px;
width: 100%;
max-height: 400px;
min-width: 300px;
background-color: ${({ theme }) => theme.colors.white};
z-index: 1;



img {
max-height: 200px;
width: 100%;
object-fit: contain;
margin-bottom: 15px;

}
`;

export const StyledInfo = styled.div`
height: 100px;
margin-bottom: 15px;

`;

export const Title = styled.div`
font-size: 14px;
`;

export const Price = styled.div`
margin-top: 5px;
`;

export const Stars = styled.div`
color: black;
`;

export const AddButton = styled.button`
background-color: ${({ theme }) => theme.colors.orange};
border: 1px solid;
margin-top: 10px;
cursor: pointer;
border-color: #a88734;
font-size: 12px;
width: 100px;
margin: 0 auto;
padding: 2px;;
`;