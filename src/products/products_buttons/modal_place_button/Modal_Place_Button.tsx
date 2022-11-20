import Styled from "styled-components";
import Colors from "../../../Colors";

const StyledModalPlaceButton = Styled.button`
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
    return (
        <StyledModalPlaceButton>
            Place Order
        </StyledModalPlaceButton> 
    )
}

export default ModalPlaceButton