import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { icons, marks } from "../../../globalStyles/Images";
import { Error404 } from "../../../routes/Routes";
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
    .arrivals-view{
        display: none;
    }
    .cards-shop {
        display: flex;
        .teste {
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
                cursor: pointer;
            }
        }
    } 
    @media(max-width: 800px){
        padding-bottom: 1.5rem;
        .shop-mobile{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2 {
                margin-top: 2rem;
                margin-left: 1rem;
                font-size: 1rem;
            }
            .arrivals-view {
                margin-top: 2rem;
                display: flex;
                p {
                    font-size: 0.8rem;
                    margin-right: 0.5rem;
                }
                img {
                    width: 0.4rem;
                    margin-right: 2rem;
                }
            }
        }
        .cards-shop {
            .teste { 
                flex-direction: column;           
                .shop {
                    width: 110px;
                    height: 100px;
                    border-radius: 8px;
                    margin-left: 1rem;
                    margin-right: 0.1rem;
                    img{
                        width: 70px;
                        height: 70px;
                    }
                }
            }
        }
    }   
`; 

const Shop = () => {
    return (
        <>
            <StyledShop>
                <div className="shop-mobile">
                    <h2>Shop by brands</h2>
                    <div className="arrivals-view">
                    <p onClick={() => Error404()}>View All</p> 
                    <img src={icons.Cut_arrow} alt="icone de maior Q"/>
                    </div>
                </div>
                <div className="cards-shop">
                    <div className="teste">
                        <div className="shop">
                            <img onClick={() => Error404()} src={marks.Zara} alt="logo da loja zara"/>
                        </div>
                        <div className="shop">
                            <img onClick={() => Error404()} src={marks.DeG} alt="logo da loja zara"/>
                        </div>
                    </div> 
                    <div className="teste"> 
                        <div className="shop">
                            <img onClick={() => Error404()} src={marks.HeM} alt="logo da loja zara"/>
                        </div>                                 
                        <div className="shop">
                            <img onClick={() => Error404()} src={marks.Chanel} alt="logo da loja zara"/>
                        </div> 
                    </div>
                    <div className="teste">                  
                        <div className="shop">
                            <img onClick={() => Error404()} src={marks.Prada} alt="logo da loja zara"/>
                        </div>
                        <div className="shop">
                            <img onClick={() => Error404()} src={marks.Biba} alt="logo da loja zara"/>
                        </div>
                    </div>
                </div>            
            </StyledShop>
            <BannerShop />
        </>
    )
}

export default Shop