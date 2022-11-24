import Styled from "styled-components";
import { image_mobile, imgs } from "../../../globalStyles/Images"
import Colors from "../../../globalStyles/Colors";
import ButtonBanner from "./button/Button"

const StyledBanner = Styled.div`
    display: flex;
    align-items: center;
    margin: 2rem;
    overflow-x: auto;
    .banner-info-desktop {
        width: 100%;
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
    .banner-info-alternative{
        display: none;
    }
    .banner-info2 {
        display: none;
    }
    @media (max-width: 800px) {
        margin-top: 4rem;
        margin-left: 1rem;
        margin-right: 2rem;
        overflow-x: auto;
            &::-webkit-scrollbar{
            display: none;
        } 
        .banner-info-desktop {
            display: none
        }
        .banner-info {
            display: none;
        }
        .banner-info-alternative {
            display: block;
        }
        .banner-info2 {
            display: block;
            margin-left: 1rem;
        }
    }
    
`;
const Banner = () => {
    return (
        <StyledBanner>
            <img className="banner-info-desktop" src={imgs.Image_banner} alt="imagem de mulher vestida com blusa branca, calça jeans e bolsa rosa"/>
            <div className="banner-info">
                <h2>Carry your Funk</h2>
                <p>Trendy handbags collection for your party animal</p>
                <ButtonBanner />
            </div>
            <img className="banner-info-alternative" src={image_mobile.Funk_mobile} alt="imagem de mulher vestida com blusa branca, calça jeans e bolsa rosa" />
            <img className="banner-info2" src={image_mobile.Wide_mobile} alt="imagem de mulher feliz com o desconto"/>
        </StyledBanner>
    )
}

export default Banner