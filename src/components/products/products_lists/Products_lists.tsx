import Styled from "styled-components";
import { icons } from "../../../globalStyles/Images";

const StyledProductsList = Styled.div`
width: 600px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 2rem;
img{
    margin: 1rem;
}
.product-img {
    width: 75px;
    height: 75px;
    border-radius: 8px;
}    
`;
const ProductsList = ({figure}:any) => {

    return (        
        <StyledProductsList>
            <img src={icons.Arrow_left} alt="icone de menor q" />
            <img className="product-img" src={figure} alt="bolsa com alça de couro" />
            <img className="product-img" src={figure} alt="bolsa com alça de couro" />
            <img className="product-img" src={figure} alt="bolsa com alça de couro" />
            <img className="product-img" src={figure} alt="bolsa com alça de couro" />
            <img src={icons.Cut_arrow} alt="icone de maior q" />             
        </StyledProductsList>         
    )
}
export default ProductsList
