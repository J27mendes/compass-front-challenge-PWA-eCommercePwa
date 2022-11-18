import Styled from "styled-components";
import { imgs } from "../components/Images"
import Colors from "../Colors";
import ButtonBanner from "./button/Button"

const StyledBanner = Styled.div`
    display: flex;
    align-items: center;
    margin: 2rem;
    img {
        z-index: -1;
        margin-right: -53%;
        border-radius: 25px;
    }
    .banner-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 630px;
        height: 52vh;
        background-color: ${Colors.grey};
        opacity: 0.8;
        padding-left: 3rem;   
        border-radius: 25px 0 0 25px;     
        h2 {
            color: ${Colors.primary};
            font-size: 4rem;
            font-weight: 800;
        }
        p {
            color: ${Colors.primary};
            font-size: 1.9rem;
            font-weight: 500;
            width: 560px;
            margin: 1.6rem 0 1.6rem 0;
            line-height: 3rem;
        }        
    }
    
`;
const Banner = () => {
    return (
        <StyledBanner>
            <img src={imgs.Image_banner} alt="imagem de mulher vestida com blusa branca, calça jeans e bolsa rosa"/>
            <div className="banner-info">
                <h2>Carry your Funk</h2>
                <p>Trendy handbags collection for your party animal</p>
                <ButtonBanner />
            </div>
        </StyledBanner>
    )
}

export default Banner