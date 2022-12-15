import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { icons, products } from "../../../globalStyles/Images";
import Marking from "./pages_marking/Pages_Marking";
import { useNavigate } from 'react-router-dom';

const StyledCardCategory = Styled.div`
    display: flex;
    flex-wrap: wrap;
    .category-products {
        width: 285px;
        margin-top: 2rem;
        margin-right: 2rem;
        text-decoration: none;
        cursor: pointer;
        img {
            border-radius: 8px;
            margin-bottom: 0.5rem;
        }
        .card-products-info {
            display: flex;
            justify-content: space-between;
            .category-products-amount {
                color: ${Colors.dark};
                font-weight: 500;
            }
        }
        .category-products-name {
            color: ${Colors.low_emphasis};
            font-size: 0.9rem;
            font-weight: 500;
        }
        .card-like-star {
            display: flex;
            align-items: center;
            margin-top: 0.5rem;
            .category-products-ratings {
                color: ${Colors.primary};
                font-size: 0.9rem;
                font-weight: 600;
                margin-left: 1.3rem;
            }
        }
        .card-price-promotion {
            display: flex;
            align-items: flex-start;
            .price-real {
                color: ${Colors.dark};
                font-weight: 600;
                margin-right: 0.4rem;
            }
            .suggested-price {
                text-decoration: line-through;
                color: ${Colors.low_emphasis};
                font-size: 0.8rem;
                font-weight: 500;
                margin-right: 0.4rem;
            }
            .price-descont {
                color: ${Colors.red};
                font-weight: 500;
            }
        } 
    }
`;

const CardCategory = ({infoCard}:any) => {
    const navigate = useNavigate();

    return (
        <>
            <StyledCardCategory>
                {infoCard.map((info:any) => (
                    <div onClick={() => {navigate(`/products/${info.id}`)}} key={info.id} className="category-products">
                        <img src={products.Duffle_1}  alt={info.arrivalsName} />
                        <div className="card-products-info">
                            <p className="category-products-amount">{info.arrivalsName}</p>
                            <img src={icons.Like_black} alt="icone de coração" />
                        </div>
                        <p className="category-products-name">{info.arrivalsInfo}</p>
                        <div className="card-like-star">
                            <img src={icons.Star_full} alt="icone de estrela" />
                            <img src={icons.Star_full} alt="icone de estrela" />
                            <img src={icons.Star_full} alt="icone de estrela" />
                            <img src={icons.Star_full} alt="icone de estrela" />
                            <img src={icons.Star} alt="icone de estrela" />
                            <p className="category-products-ratings">43 Ratings</p>
                        </div>
                        <div className="card-price-promotion">
                            <p className="price-real">{info.arrivalsPrice}</p>
                            <p className="suggested-price">$78.66</p>
                            <p className="price-descont">50% OFF</p>
                        </div>
                    </div>
                ))}
            </StyledCardCategory>
            <Marking />  
        </>     
    )
}
export default CardCategory