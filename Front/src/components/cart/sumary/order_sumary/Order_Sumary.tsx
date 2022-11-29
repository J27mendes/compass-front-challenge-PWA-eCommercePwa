import Styled from "styled-components";

const StyledOrderSumary = Styled.div`
font-weight: 700;  
font-size: 1.2rem;  
`;

export default function OrderSumary (){
    return (
        <>
            <StyledOrderSumary>
                Order Summary
            </StyledOrderSumary>
        <hr />
        </>
    )
}