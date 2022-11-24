import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledMake = Styled.p`
display: none;
@media(max-width: 800px) {
    margin: 2rem 0 0 1rem;
    display: block;
    color: ${Colors.dark};
    font-size: 0.9rem;
    font-weight: 700;
}    
`;

const MakeSkincare = () => {
    return (
        <StyledMake>
            MakeUp & Skincare
        </StyledMake>       
    )
}

export default MakeSkincare