// import { Link } from "react-router-dom";
import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { products } from "../../../globalStyles/Images";
import { Error404 } from "../../../routes/Routes";

const StyledCollections = Styled.section`
    background-color: ${Colors.primary};
    padding-bottom: 4rem;
    h2 {
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
            text-decoration: none;
            color: ${Colors.dark};
            cursor: pointer;
            img {
                border-radius: 16px;
                margin-bottom: -2.8rem;
            }
            p {
                font-size: 1.5rem;
                font-weight: 600;
                margin-left: 1rem;
                color: ${Colors.dark}
            }
        }
    }
    .card-collections-mobile{
        display: none;
    }
    @media(max-width: 800px){
        padding-bottom: 0.5rem;
        h2 {
            font-size: 1rem;
            padding: 1.5rem 0 1rem 1rem;
        }
        .card-collections-mobile {
            display: flex;
            .product-collections {
                text-decoration: none;
                margin-left: 1rem;
                margin-right: 0.2rem;
                color: ${Colors.dark};
                margin-bottom: 2rem;
                cursor: pointer;
                img {
                    border-radius: 10px;
                    width: 176px;
                    height: 176px;
                    margin-bottom: -2rem;
                }
                p {
                    margin-left: 1rem;
                    font-size: 1rem;
                    font-weight: 600;
                } 
                .p-collections {
                    margin-left: 2rem;
                }  
            } 
        }
        .card-collections {
            display: none;
        }
            
        }
    }
`;

const Collections = () => {
    return (
        <StyledCollections>        
            <h2>Handpicked Collections</h2>
            <div className="card-collections">
                <div onClick={() => Error404()} className="product-collections">
                    <img src={products.Personal_care} alt="imagem de vidro de perfume"/>
                    <p>Personal Care</p>
                </div>
                <a href="/category" className="product-collections">
                    <img src={products.Handbags} alt="imagem de bolsa de mão"/>
                    <p>Handbags</p>
                </a>
                <div onClick={() => Error404()} className="product-collections">
                    <img src={products.Wrist_watches} alt="imagem de relógio"/>
                    <p>Wrist Watches</p>
                </div>
                <div onClick={() => Error404()} className="product-collections">
                    <img src={products.Sun_glasses} alt="imagem de óculos"/>
                    <p>Sun Glasses</p>
                </div>
            </div>
            <div className="card-collections-mobile">
                <div className="collections-mobile-container">
                    <div onClick={() => Error404()} className="product-collections">
                        <img src={products.Personal_care} alt="imagem de vidro de perfume"/>
                        <p>Personal Care</p>
                    </div>
                    <a href="/category" className="product-collections">
                        <img src={products.Handbags} alt="imagem de bolsa de mão"/>
                        <p className="p-collections">Handbags</p>
                    </a>
                </div>
                <div className="collections-mobile-container">
                    <div onClick={() => Error404()} className="product-collections">
                        <img src={products.Wrist_watches} alt="imagem de relógio"/>
                        <p>Wrist Watches</p>
                    </div>
                    <div onClick={() => Error404()} className="product-collections">
                        <img src={products.Sun_glasses} alt="imagem de óculos"/>
                        <p>Sun Glasses</p>
                    </div>
                </div>
            </div>            
        </StyledCollections>        
    )
}

export default Collections