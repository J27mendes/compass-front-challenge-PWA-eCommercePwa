import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";

const StyledCartProducts = Styled.div` 
    align-items: center;
    .cart-name {
        color: ${Colors.dark};
        font-weight: 600;
    }
    .cart-info{
        margin: 1rem 0;
        font-size: 0.9rem;
        color: ${Colors.low_emphasis};
    }
    .cart-qt {
        font-size: 0.9rem;
        color: ${Colors.low_emphasis};
    }    
`

export default function CartProducts (){
    return (
        <StyledCartProducts>
            <p className="cart-name">Coach</p>
            <p className="cart-info">Leather Coach Bag</p>
            <p className="cart-qt">Qty- 1</p>
        </StyledCartProducts>
    )
}