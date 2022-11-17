import Styled from "styled-components";
import { icons, products } from "../../components/Images";
import Colors from "../../Colors";

const StyledArrivalsCard = Styled.section`
    display: flex;
    margin-top: 2rem ;
    margin-left: 2rem; 
    margin-bottom: 2.2rem;
    .card-arrivals {
        margin-right: 2rem;
        img {
        margin-bottom: 0.5rem;
        border-radius: 8px;
    }
    .arrivals-like {
        width: 284px;
        display: flex;
        justify-content: space-between;
        .arrivals-info {
            font-family: "inter";
            font-size: 1rem;
            font-weight: 600;
        }
    }
    .arrivals-name {
        font-family: "Inter";
        font-size: 0.9rem;
        color: ${Colors.low_emphasis}
    }
    .arrivals-price {
        margin-top: 0.8rem;
        font-family: "inter";
        font-size: 1rem;
        font-weight: 600;
    }
}
    
`;

const ArrivalsCard = () => {
    return (
        <StyledArrivalsCard>
            <section className="card-arrivals">
                <img src={products.Pink_bag} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Grande</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Blossom Pouch</p>
                <p className="arrivals-price">$39.49</p>
            </section>
            <section className="card-arrivals">
                <img src={products.Duffle_1} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Coach</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Leather Coach Bag</p>
                <p className="arrivals-price">$54.69</p>
            </section>
            <section className="card-arrivals">
                <img src={products.Irene_unsplash_2} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Remus</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Brown Strap Bag</p>
                <p className="arrivals-price">$57.00</p>
            </section>
            <section className="card-arrivals">
                <img src={products.Black_bag_1} alt="imagem de bolsa cor de rosa"/>
                <div className="arrivals-like">
                    <p className="arrivals-info">Boujee</p>
                    <img src={icons.Like_black} alt="icone de coração"/>
                </div>
                <p className="arrivals-name">Black Bag</p>
                <p className="arrivals-price">$56.49</p>
            </section>
        </StyledArrivalsCard>
        
    
    )
}
export default ArrivalsCard