import Styled from "styled-components";
import { imgs, icons } from "../../../../globalStyles/Images";
import Colors from "../../../../globalStyles/Colors";
import { Error404 } from "../../../../routes/Routes";
import Trending from "../../trending/Trending";
import ImageTrending from "../../images_trending/Image_trending";


const StyledBannerMinor = Styled.div`
    padding-left: 2rem;
    padding-bottom: 4rem;
    display: flex;
    .banner-minor-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 5rem;
        img {
        border-radius: 15px;
        margin-right: -15rem;
        }
        .banner-minor {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            p {
                width: 200px;
                text-align: right;
                font-size: 2.4rem;
                font-weight: 800;
                line-height: 3rem;
                color: ${Colors.banner_red};
            }
            .banner-minor-peels {
                width: 200px;
                text-align: right;
                font-size: 2.4rem;
                font-weight: 800;
                line-height: 3rem;
                color: ${Colors.primary};
            }
            .banner-minor-icone {
                margin-right: 3rem;
                margin-top: 1.8rem;
                cursor: pointer;
            }
        }
    }
    @media(max-width: 800px){
        padding-left: 1rem;
        padding-bottom: 1rem;
        .banner-minor-container {
            margin-right: 1.5rem;
            img {
                border-radius: 8px;
                width: 45vw;
                height: 18vh; 
                margin-right: -7rem;              
            }
            .banner-minor {
                p {
                    width: 100px;
                    line-height: 1rem;
                    font-size: 0.9rem;
                } 
                .banner-minor-peels {
                    width: 100px;
                    line-height: 1rem;
                    font-size: 0.9rem;
                }       
                .banner-minor-icone {
                    img {
                        margin-left: 1.5rem;
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }
        }
    }
`;

const BannerMinor = () => {
    return (
        <>
            <StyledBannerMinor>
                <div className="banner-minor-container">
                    <img src={imgs.Creme} alt="imagem de mãos segurando pote de creme"/>
                    <div className="banner-minor">
                        <p>Skincare Essentials</p>
                        <div className="banner-minor-icone">
                            <img onClick={() => Error404()} src={icons.Circle_arrow_red} alt="icone de seta em volta de circulo"/>
                        </div>
                    </div>
                </div> 
                <div className="banner-minor-container">
                    <img src={imgs.Image_skincare} alt="imagem de mulher cuidando da pele"/>
                    <div className="banner-minor">
                        <p className="banner-minor-peels">Facepacks & Peels</p>
                        <div className="banner-minor-icone">
                            <img onClick={() => Error404()} src={icons.Circle_arrow_blue} alt="icone de seta em volta de circulo"/>
                        </div>
                    </div>
                </div> 
            </StyledBannerMinor>
            <Trending />
            <ImageTrending />
        </>
        
    )
}

export default BannerMinor