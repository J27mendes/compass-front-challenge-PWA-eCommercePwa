import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { icons, products } from "../../../globalStyles/Images";
import Marking from "./pages_marking/Pages_Marking";

const StyledCardCategory = Styled.div`
    display: flex;
    .category-products {
        width: 285px;
        margin-top: 2rem;
        margin-right: 2rem;
        text-decoration: none;
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

const CardCategory = () => {
    return (
        <>
            <StyledCardCategory>
                <a href="/products/1" className="category-products">
                    <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Grande</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Blossom Pouch</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$39.49</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
                <a href="/products/3" className="category-products">
                    <img src={products.Irene_unsplash_2} alt="imagem de bolsa de couro com corrente prateada" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Remus</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Brown Strap Bag</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$57.00</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
                <a href="/products/2" className="category-products">
                    <img src={products.Duffle_1} alt="imagem de bolsa e alça de couro" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Coach</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Leather Coach Bag</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$54.69</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
            </StyledCardCategory> 
            <StyledCardCategory>
                <a href="/products/4" className="category-products">
                    <img src={products.Black_bag_1} alt="imagem de bolsa cor de rosa" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Boujee</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Black Bag</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$56.49</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
                <a href="/products/1"  className="category-products">
                    <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Grande</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Blossom Pouch</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$39.49</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
                <a href="/products/1" className="category-products">
                    <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Grande</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Blossom Pouch</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$39.49</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
            </StyledCardCategory>
            <StyledCardCategory>
                <a href="/products/1" className="category-products">
                    <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Grande</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Blossom Pouch</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$39.49</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
                <a href="/products/1" className="category-products">
                    <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Grande</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Blossom Pouch</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$39.49</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
                <a href="/products/1" className="category-products">
                    <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa" />
                    <div className="card-products-info">
                        <p className="category-products-amount">Grande</p>
                        <img src={icons.Like_black} alt="icone de coração" />
                    </div>
                    <p className="category-products-name">Blossom Pouch</p>
                    <div className="card-like-star">
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star_full} alt="icone de estrela" />
                        <img src={icons.Star} alt="icone de estrela" />
                        <p className="category-products-ratings">43 Ratings</p>
                    </div>
                    <div className="card-price-promotion">
                        <p className="price-real">$39.49</p>
                        <p className="suggested-price">$78.66</p>
                        <p className="price-descont">50% OFF</p>
                    </div>
                </a>
            </StyledCardCategory> 
            <Marking />  
        </>     
    )
}
export default CardCategory