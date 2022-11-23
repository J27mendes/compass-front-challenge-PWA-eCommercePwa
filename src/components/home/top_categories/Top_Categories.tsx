import Styled from "styled-components";
import { image_mobile } from "../../../globalStyles/Images";

const StyledTopCategories = Styled.section `
  display: none;
  @media(max-width: 800px) {
    display: block;
    margin-left: 1rem;
    p {
        font-weight: 600;
    }
    .top-categories-mobile {
        display: flex;
        margin-top: 1rem;       
        .top-categories-container {
            margin-right: 1rem;          
            img {
                width: 61px;
                height: 61px;
            }
            p {
                margin-top: 0.5rem;
                font-size: 0.8rem;
            }          
        }
    }
  }  
`;

const TopCategories = () => {
    return (
        <StyledTopCategories>
            <p>Top Categories</p>
            <div className="top-categories-mobile">
                <div className="top-categories-container">
                    <img src={image_mobile.Skincare_mobile} alt="imagem de bisnaga de creme" />
                    <p>Skincare</p>
                </div>
                <div className="top-categories-container">
                    <img src={image_mobile.Jellewery_mobile} alt="imagem de vidro de perfume"/>
                    <p>Jewellery</p>
                </div>
                <div className="top-categories-container">
                    <img src={image_mobile.Handbags_mobile} alt="imagem de bolsa de mão" />
                    <p>Handbags</p>
                </div>
                <div className="top-categories-container">
                    <img src={image_mobile.Watches_mobile} alt="imagem de relógio de pulso"/>
                    <p>Watches</p>
                </div>
                <div className="top-categories-container">
                    <img src={image_mobile.Skincare_mobile} alt="imagem de bisnaga de creme"/>
                    <p>Eyewear</p>
                </div>
            </div>

        </StyledTopCategories>
        
    )
}

export default TopCategories