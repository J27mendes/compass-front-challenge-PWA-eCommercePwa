import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";

const StyledModalPlaceButton = Styled.button`
    text-decoration: none;
    width: 360px;
    height: 7vh;
    background-color: ${Colors.primary};
    color: ${Colors.bright}; 
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 8px; 
    border: none;
    margin-top: 1rem;  

`;

const ModalPlaceButton = () => {
    const navigate = useNavigate();
    return (
        <StyledModalPlaceButton onClick={() => {navigate('/cart')}}>            
            Place Order            
        </StyledModalPlaceButton> 
    )
}

export default ModalPlaceButton