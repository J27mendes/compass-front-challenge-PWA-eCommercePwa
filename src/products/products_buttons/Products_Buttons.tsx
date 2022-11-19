import Styled from "styled-components";
import Colors from "../../Colors";
import { icons } from "../../components/Images";

const StyledProductsButtons = Styled.div`
    display: flex;
    margin-top: 2rem;
    .button-bag {
        display: flex;
        justify-content: center;
        background-color: ${Colors.primary};
        color: ${Colors.grey};
        border: solid 1px ${Colors.primary};
        border-radius: 5px;  
        width: 320px; 
        height: 8vh;
        font-weight: 600;
        padding-top: 1rem;
        padding-right: 3rem;        
        margin-right: 2rem;
        img {
        width: 25px;
        height: 25px;
        margin-top: -0.5rem;
        }
    }
    .button-bag-list {
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
        img {
        width: 25px;
        height: 25px;
        margin-top: -0.5rem;
        }
    }
`

const ProductsButtons = () => {
    return (
        <StyledProductsButtons>
            <button className="button-bag"><img src={icons.Bag_white} alt="icone de sacola"/>Add to bag</button>
            <button className="button-bag-list"><img src={icons.Like} alt="icone de sacola"/>Add to Wishlist</button>

        </StyledProductsButtons>
    )
}
export default ProductsButtons