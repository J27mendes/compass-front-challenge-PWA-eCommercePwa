import Styled from "styled-components";
import { products } from "../../../../globalStyles/Images";


const StyledCartImg = Styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 5px;
        margin-right: 1rem;
    }
`;

export default function CartImg (){
    return (
        <StyledCartImg>
            <img  src={products.Irene_unsplash_2} alt="imagem de bolsa com alça de couro"/>
        </StyledCartImg>
    )
}