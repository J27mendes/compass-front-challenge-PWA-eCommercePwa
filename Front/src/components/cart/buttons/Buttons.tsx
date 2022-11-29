import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledButtons = Styled.div`
display: flex;
margin-top: 2rem;
    .place-order {
        background-color: ${Colors.primary};
        color: ${Colors.bright};
        font-size: 1rem;
        border: solid 1px ${Colors.primary};
        border-radius: 8px;
        padding: 0.7rem 3rem; 
        font-weight: 500; 
        margin-right: 3rem;
    }
    .continue-shopping {
        background-color: ${Colors.bright};
        color: ${Colors.primary};
        font-size: 1rem;
        border: solid 2px ${Colors.primary};
        border-radius: 8px;
        padding: 0.7rem 1.5rem; 
        font-weight: 600; 
        

    }


`;

export default function Buttons (){
    return (
        <StyledButtons>
            <button className="place-order">Place Order</button>
            <button className="continue-shopping">Continue Shopping</button>
        </StyledButtons>        
    )
}