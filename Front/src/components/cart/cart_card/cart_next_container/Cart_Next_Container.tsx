import useContext from '../../../../context/useContext'
import Styled from "styled-components";

const StyledCartNextContainer = Styled.div`
    display: flex;  
    justify-content: space-between; 
    margin-left: 3.5rem;      
`;
export default function CartNextContainer (){
    const { products } = useContext();
      
    return (
        <StyledCartNextContainer>
            <p className="price">$54.69</p>
            <p className="qty-price">{products}</p>
            <p className="sub-total">$54.69</p>
        </StyledCartNextContainer>
    )
}