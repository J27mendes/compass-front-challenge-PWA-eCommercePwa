import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";

const StyledButtonPlace = Styled.button`
    background-color: ${Colors.primary};
    color: ${Colors.bright};
    font-size: 1rem;
    border: solid 1px ${Colors.primary};
    border-radius: 8px;
    padding: 0.7rem 3rem; 
    font-weight: 500; 
    margin-right: 3rem;    
    cursor:pointer;
`;

export default function ButtonPlace(props:any){
    return (
        <StyledButtonPlace>
            {props.value}                       
        </StyledButtonPlace>
    )
}