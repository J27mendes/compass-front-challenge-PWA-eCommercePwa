import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledCartPage = Styled.h2`
font-size: 2.1rem;
color: ${Colors.primary};
font-weight: 600;
margin-left: 2rem;  
`;

export default function CartPage (props:any) {    
    return (
        <StyledCartPage>
            {props.title}
        </StyledCartPage>
    )
}