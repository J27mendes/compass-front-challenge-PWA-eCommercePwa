import Styled from "styled-components";
import Colors  from '../../../globalStyles/Colors';
import { icons } from  '../../../globalStyles/Images';

const StyledCheckoutNavigation = Styled.div`
    display: flex;
    margin-left: 2rem;
    margin-top: 7rem;
    margin-bottom: 3rem;
    .navigation-first-page {
        font-weight: 600;
        color: ${Colors.primary};
        margin-right: 1rem;
    }
    img {
        margin-right: 1rem;
    }
    .navigation-next-page {
        font-weight: 500;
        color: ${Colors.low_emphasis};
        margin-right: 1rem;
    }    
`;

export default function CheckoutNavigation (){
    return (
        <StyledCheckoutNavigation>
            <p className="navigation-first-page">Home</p>
            <img src={icons.Cut_arrow_black} alt="sinal de maior q"/> 
            <p className="navigation-next-page">Checkout</p>
        </StyledCheckoutNavigation>         
    )
}