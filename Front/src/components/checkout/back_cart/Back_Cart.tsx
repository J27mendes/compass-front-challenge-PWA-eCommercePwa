import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import ButtonPlace from "../../cart/buttons/button_place/Button_Place";

const StyledBackCart = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: 2rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    p {
        text-decoration: underline;
        font-size: 0.9rem;
        color: ${Colors.primary};
        font-weight: 600;
    }
`;

export default function BackCart () {
    return (
        <StyledBackCart>
            <p>Back to Cart</p> 
            <ButtonPlace value={'Next'}/>           
        </StyledBackCart>
    )
}