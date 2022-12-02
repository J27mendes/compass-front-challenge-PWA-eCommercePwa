import Styled from "styled-components";

const StyledOrderSumary = Styled.div`
font-weight: 700;  
font-size: 1.2rem;  
`;

export default function OrderSumary (props:any){
    return (
        <>
            <StyledOrderSumary>
                {props.title}
            </StyledOrderSumary>
        <hr />
        </>
    )
}