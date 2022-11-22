import Styled from "styled-components";
import { imgs } from "../../../globalStyles/Images"
import Colors from "../../../globalStyles/Colors";
import ButtonBanner from "./button/Button"

const StyledBanner = Styled.div`
    display: flex;
    align-items: center;
    margin: 2rem;
    img {
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
    @media (max-width: 800px) {
        margin-top: 4rem;
        margin-left: 1rem;
        margin-right: 2rem;
        img {
            border-radius: 5px;
        }
        .banner-info {
            width: 200px;
            height: 10vh;
            border-radius: 8px 0 0 8px;
            padding-left: 0.5rem;
            height: 12vh;
            h2 {
                margin-top: 0.5rem;
                width: 120px;
                font-size: 1.2rem;
            }
            p {
                margin: 0.5rem 0 1rem 0;
                width: 150px;
                font-size: 0.7rem;
                line-height: 0.8rem;
            }
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