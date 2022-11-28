import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";

const StyledCartMoveRemove = Styled.div`
    display: flex;
    justify-content: space-evenly;  
    width: 270px; 
    .move {
        font-size: 0.8rem;
        color: ${Colors.primary};
        font-weight: 600;
        text-decoration: underline; 
    }
    .remove {
        font-size: 0.8rem;
        color: ${Colors.red};
        font-weight: 600;
        text-decoration: underline; 
    }  
`

export default function CartMoveRemove (){
    return (
        <StyledCartMoveRemove>
            <p className="move">Move to WishList</p>
            <p className="remove">Remove</p>
        </StyledCartMoveRemove>
    )
}