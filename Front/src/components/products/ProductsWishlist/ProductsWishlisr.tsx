import Styled from 'styled-components';
import Colors from '../../../globalStyles/Colors';
import { icons } from '../../../globalStyles/Images';

const StyledProductWishlist = Styled.button`
    display: flex;
    justify-content: center;
    background-color: ${Colors.bright};
    color: ${Colors.primary};
    border: solid 2px ${Colors.primary};
    border-radius: 8px;  
    width: 260px; 
    height: 8vh;
    font-weight: 700;
    padding-top: 1rem;
    padding-right: 3rem;        
    margin-right: 2rem;
    font-size: 0.9rem;
    cursor: pointer;
    .button-bag-list {
    width: 25px;
    height: 25px;
    margin-top: -0.5rem;
}
`;

const ProductWishlist = (props:any) => {
    return (
        <StyledProductWishlist >
          <img className="button-bag-list" src={icons.Like} alt="" />
          {props.text}
        </StyledProductWishlist>
    )
}
export default ProductWishlist