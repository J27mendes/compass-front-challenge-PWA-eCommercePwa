import Styled from "styled-components";
import { icons, products } from "../../../../globalStyles/Images";
import Colors from "../../../../globalStyles/Colors";

const StyledArrivalsCard = Styled.section`
    display: flex;
    margin-top: 2rem;
    margin-left: 2rem; 
    margin-bottom: 2.2rem;
    .card-arrivals {
        margin-right: 2rem;
        text-decoration: none;
        img {
        margin-bottom: 0.5rem;
        border-radius: 8px;
    }
    .arrivals-like {
        width: 284px;
        display: flex;
        justify-content: space-between;
        .arrivals-info {
            color: ${Colors.dark};
            font-size: 1rem;
            font-weight: 600;
        }
    }
    .arrivals-name {
        font-size: 0.9rem;
        color: ${Colors.low_emphasis};
    }
    .arrivals-price {
        margin-top: 0.8rem;
        font-size: 1rem;
        font-weight: 600;
        color: ${Colors.dark};
    }
} 

@media(max-width: 800px){
    margin-top: 1rem;
    margin-left: 1rem; 
    .card-arrivals {
        margin-right: 1rem;
        img {
            width: 160px;
            height: 160px;
        }
        .arrivals-like {
            width: 160px;
            .arrivals-info {
                font-size: 0.9rem;
            }
            img {
                width: 1.3rem;
                height: 1.3rem;
            }
        }
        .arrivals-name {
            font-size: 0.8rem;
            margin: -0.4rem 0;
        }
    }
}
`;

const ArrivalsCard = () => {
    return (
        <StyledArrivalsCard>                       
            <a href="/products/1" className="card-arrivals">
                <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Grande</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Blossom Pouch</p>
                <p className="arrivals-price">$39.49</p>
            </a>
            <a href="/products/2" className="card-arrivals">
                <img src={products.Duffle_1} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Coach</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Leather Coach Bag</p>
                <p className="arrivals-price">$54.69</p>
            </a>
            <a href="/products/3" className="card-arrivals">
                <img src={products.Irene_unsplash_2} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Remus</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Brown Strap Bag</p>
                <p className="arrivals-price">$57.00</p>
            </a>
            <a href="/products/4" className="card-arrivals">
                <img src={products.Black_bag_1} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Boujee</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Black Bag</p>
                <p className="arrivals-price">$56.49</p>
            </a>          
        </StyledArrivalsCard>      
    )
}
export default ArrivalsCard