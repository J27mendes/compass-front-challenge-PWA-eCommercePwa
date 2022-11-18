import Styled from "styled-components";
import Colors from "../../Colors";
import { icons } from "../../components/Images";
import CategorySearch from "../category_search/Category_Search";
import InfoCheck from "../info_check/Info_Check";

const StyledInfoProducts = Styled.section`
    width: 22%;
    margin-left: 2rem;  
    h2 {
        font-family: "Inter";
        font-size: 2.1rem;
        color: ${Colors.primary};
        font-weight: 600;
        margin-bottom: 3rem;
    }  
    .info-description {
        display: flex;
        justify-content: space-between;
        p {
            font-family: "Inter";
            color: ${Colors.dark};
            font-size: 1rem;
            font-weight: 600;            
        }
        span {
            font-size: 1.8rem;
            margin-right: 0.5rem;
            font-weight: 600;
        }
    }`;  
    
    const StyledContainer = Styled.section`
        display: flex
    `


const InfoProducts = () => {
    return (
        <StyledContainer>
            <StyledInfoProducts>
                <h2>Handbags</h2>
                <div className="info-description">
                    <p>Size</p><img src={icons.Plus} alt="icone sinal de mais" />
                </div>            
                <hr />
                <div className="info-description">
                    <p>Color</p><img src={icons.Minus} alt="icone sinal de menos" />
                </div>
                <hr />
                <InfoCheck />
                <div className="info-description">
                    <p>Brand</p><img src={icons.Plus} alt="icone sinal de mais" />
                </div>            
                <hr />
                <div className="info-description">
                    <p>Price Range</p><img src={icons.Plus} alt="icone sinal de mais" />
                </div>            
                <hr />
                <div className="info-description">
                    <p>Discount</p><img src={icons.Plus} alt="icone sinal de mais" />
                </div>            
                <hr />
                <div className="info-description">
                    <p>Availability</p><img src={icons.Plus} alt="icone sinal de mais" />
                </div>            
                <hr />
            </StyledInfoProducts>
            <CategorySearch />
        </StyledContainer>        
    )
}

export default InfoProducts