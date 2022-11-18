import Styled from "styled-components";
import { imgs } from "../../components/Images";
import Colors from "../../Colors";
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
    }
    img {
        border-radius: 25px;
        z-index: -1;
    }
`;

const BannerShop = () => {
    return (
        <>
            <StyledBannerShop>
                <div className="shop-lifestyle">
                    <h2>LIFESTYLE</h2>
                    <p>Makeup Accessories from Top Brands</p>
                </div>
                <img src={imgs.Image_shop} alt="imagem de acessorios de maquiagem" />
            </StyledBannerShop> 
            <BannerMinor /> 
        </>      
    )
}

export default BannerShop