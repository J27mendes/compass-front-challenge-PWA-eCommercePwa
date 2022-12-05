import { Link} from 'react-router-dom'
import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import ButtonPlace from "./button_place/Button_Place";


const StyledButtons = Styled.div`
display: flex;
margin-top: 2rem;
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
            <Link to={'/checkout'}><ButtonPlace value={'Place Order'}/></Link>
            <button className="continue-shopping">Continue Shopping</button>
        </StyledButtons>        
    )
}