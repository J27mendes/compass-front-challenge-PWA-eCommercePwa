import Styled from 'styled-components';
import { image_mobile } from '../../../globalStyles/Images';

const StyledPwa = Styled.div`
display: none;

@media(max-width: 800px){
    margin: 1rem;
    display: block;
    img {
        width: 92vw;
    }
}
`;
const Pwa = () => {
    
    return (
        <StyledPwa>
            <img src={image_mobile.Pwa} alt="imagem de celular" />
        </StyledPwa>        
    )
}

export default Pwa