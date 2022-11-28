import Styled from "styled-components";
import { image_mobile } from "../../../globalStyles/Images";

const StyledImageTrending = Styled.div`
display: none;
@media(max-width: 800px){
    display: flex; 
    margin: 1rem;
    overflow-x: auto;
    &::-webkit-scrollbar{
        display: none;
    }     
    img {
        margin-right: 1rem;
    } 
}
`;
const ImageTrending = () => {
    return (
        <StyledImageTrending>
            <img src={image_mobile.Wide_mobile} alt="imagem de mulher feliz com o desconto" />
            <img src={image_mobile.Funk_mobile} alt="imagem de mulher vestida com blusa branca, calça jeans e bolsa rosa" />
        </StyledImageTrending>        
    )
}
export default ImageTrending