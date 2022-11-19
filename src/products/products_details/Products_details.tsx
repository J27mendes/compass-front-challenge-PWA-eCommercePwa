import Styled from "styled-components";
import Colors from "../../Colors";
import { icons } from "../../components/Images";
import ProductDelivery from "../products_delivery/Products_Delivery";

const StyledProductsDetails = Styled.section`
width: 650px;
    .product-details-name {
        font-size: 2.2rem;
        font-weight: 600;
    }
    .product-details-description {
        font-size: 1.2rem;
        color: ${Colors.low_emphasis};
        margin-top: 1rem;
        font-weight: 500;
    }
    .product-details-icons {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        margin-top: 2rem;
        margin-left: 1rem;
        .product-icons {
            width: 23px;
            height: 23px;
            margin-left: -1rem;
        }
        .product-details-aproved {
            color: ${Colors.light_text};
        }
    }
    .product-price-promotion {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        .product-price-real {
            font-size: 2.4rem;
            font-weight: 700;
            margin-right: 1.2rem;
        }
        .product-suggested-price {
            text-decoration: line-through;
            color: ${Colors.light_text};
            font-weight: 600;
            font-size: 2rem;
            margin-right: 1.2rem;
        }
        .product-price-descont {
            color: ${Colors.red};
            font-weight: 600;
            font-size: 1.2rem;
        }
    }
`;

const ProductsDetails = () => {
    return (        
        <StyledProductsDetails>                            
            <p className="product-details-name">Coach</p>                                   
            <p className="product-details-description">Leather Coach Bag with adjustable starps</p>            
            <div className="product-details-icons">
                <img className="product-icons" src={icons.Star_light} alt="icone de estrela" />
                <img className="product-icons" src={icons.Star_light} alt="icone de estrela" />
                <img className="product-icons" src={icons.Star_light} alt="icone de estrela" />
                <img className="product-icons" src={icons.Star_light} alt="icone de estrela" />
                <img className="product-icons" src={icons.Star_low} alt="icone de estrela" />
                <p className="product-details-aproved">(250) Ratings</p>
            </div>
            <div className="product-price-promotion">
                <p className="product-price-real">$54.69</p>
                <p className="product-suggested-price">$78.66</p>
                <p className="product-price-descont">50% OFF</p>
            </div>
            <hr />
            <ProductDelivery />
        </StyledProductsDetails>     
    )
}
export default ProductsDetails