import Styled from "styled-components";
import Colors from "../Colors";
import { products } from "../components/Images";

const StyledCollections = Styled.section`
    background-color: ${Colors.primary};
    padding-bottom: 4rem;
    h2 {
        font-family: "Inter";
        font-size: 2.2rem;
        font-weight: 600;
        padding: 2rem 0 2rem 2rem;
        color: ${Colors.bright};
    }
    .card-collections {
        display: flex;
        .product-collections {
            margin-left: 2rem;
            margin-right: 0.5rem;
            img {
                border-radius: 16px;
                margin-bottom: -2.8rem;

            }
            p {
                font-family: "Inter";
                font-size: 1.5rem;
                font-weight: 600;
                margin-left: 1rem;
                color: ${Colors.dark}
            }
        }
    }
`

const Collections = () => {
    return (
        <StyledCollections>        
            <h2>Handpicked Collections</h2>
            <div className="card-collections">
                <div className="product-collections">
                    <img src={products.Personal_care} alt="imagem de vidro de perfume"/>
                    <p>Personal Care</p>
                </div>
                <div className="product-collections">
                    <img src={products.Handbags} alt="imagem de vidro de perfume"/>
                    <p>Handbags</p>
                </div>
                <div className="product-collections">
                    <img src={products.Wrist_watches} alt="imagem de vidro de perfume"/>
                    <p>Wrist Watches</p>
                </div>
                <div className="product-collections">
                    <img src={products.Sun_glasses} alt="imagem de vidro de perfume"/>
                    <p>Sun Glasses</p>
                </div>
            </div>           
        </StyledCollections>
        
    )
}

export default Collections