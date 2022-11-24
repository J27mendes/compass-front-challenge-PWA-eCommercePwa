import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledTrending = Styled.p`
display: none;
    @media(max-width: 800px){
    display: flex;
    margin: 1rem 0 1rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${Colors.dark};
}
`;

const Trending = () => {
    return (
        <StyledTrending>
            Trending Deals
        </StyledTrending>
    )
}

export default Trending