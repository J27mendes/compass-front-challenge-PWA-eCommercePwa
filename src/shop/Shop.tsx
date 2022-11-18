import Styled from "styled-components";
import Colors from "../Colors";
import { marks } from "../components/Images";
import BannerShop from "./banner_shop/Banner_Shop";

const StyledShop = Styled.section`
padding-bottom: 4rem;
    h2 {
        margin-top: 4rem;
        margin-left: 2rem;
        font-size: 2.2rem;
        font-weight: 600;
        color: ${Colors.dark};
    }
    .cards-shop {
        display: flex;
        .shop {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 168px;
            height: 168px;
            background-color: ${Colors.grey};
            border-radius: 16px;
            margin-top: 2rem;
            margin-left: 2rem;
            margin-right: 0.88rem;
        }
    }    
`; 

const Shop = () => {
    return (
        <>
            <StyledShop>
                <h2>Shop by brands</h2>
                <div className="cards-shop">
                    <div className="shop">
                        <img src={marks.Zara} alt="logo da loja zara"/>
                    </div>
                    <div className="shop">
                        <img src={marks.DeG} alt="logo da loja zara"/>
                    </div>
                    <div className="shop">
                        <img src={marks.HeM} alt="logo da loja zara"/>
                    </div>
                    <div className="shop">
                        <img src={marks.Chanel} alt="logo da loja zara"/>
                    </div>
                    <div className="shop">
                        <img src={marks.Prada} alt="logo da loja zara"/>
                    </div>
                    <div className="shop">
                        <img src={marks.Biba} alt="logo da loja zara"/>
                    </div>
                </div>            
            </StyledShop>
            <BannerShop />
        </>
    )
}

export default Shop