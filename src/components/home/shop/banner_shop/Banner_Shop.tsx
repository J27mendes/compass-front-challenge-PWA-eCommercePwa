import Styled from "styled-components";
import { image_mobile, imgs } from "../../../../globalStyles/Images";
import Colors from "../../../../globalStyles/Colors";
import BannerMinor from "../banner_minor/Banner_Minor";

const StyledBannerShop = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    .shop-lifestyle {
        margin-right: -36rem;
        h2 {
            font-size: 1.8rem;
            font-weight: 500;
            color: ${Colors.color_banner};
        }
        p {
            width: 540px;
            font-size: 3.1rem;
            font-weight: 700;
            color: ${Colors.color_banner};
            margin-top: 1rem;
            line-height: 4rem;
        }
        .button-shop-arrow {
            display: none;
        }
    }
    img {
        border-radius: 25px;
        z-index: -1;
    }
    @media(max-width: 800px){
        padding-bottom: 1rem;
        padding-left: 1rem;
        .shop-lifestyle{
            margin-right: -14rem;
            h2 {
                margin-left: 1rem;
                margin-top: 1rem;
                font-size: 0.8rem;
            }
            p {
                margin-left: 1rem;
                font-size: 1rem;
                width: 200px;
                line-height: 1.2rem;
                margin-top: 0.5rem;
            }
            .button-shop-arrow {
                display: flex;
                width: 2rem;
                height: 2rem;
                margin-left: 1rem;
            } 
        }
        img {
            border-radius: 10px;
            margin: 1rem 1rem 0 1rem;
            width: 93vw;
            height: 18vh;
        }
    }
`;

const BannerShop = () => {
    return (
        <>
            <StyledBannerShop>
                <div className="shop-lifestyle">
                    <h2>LIFESTYLE</h2>
                    <p>Makeup Accessories from Top Brands</p>
                    <img className="button-shop-arrow"src={image_mobile.Arrow_right_brown} alt="seta de cor marron"/>
                </div>
                <img src={imgs.Image_shop} alt="imagem de acessorios de maquiagem" />
            </StyledBannerShop> 
            <BannerMinor /> 
        </>      
    )
}

export default BannerShop