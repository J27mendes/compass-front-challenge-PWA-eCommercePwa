import Styled from "styled-components";
import { icons } from "../../../../globalStyles/Images";
import Colors from "../../../../globalStyles/Colors";
import { allProducts } from "../../../../mock";

const StyledArrivalsCard = Styled.section`
    display: flex;
    margin-top: 2rem;
    margin-left: 2rem; 
    margin-bottom: 2.2rem;
    .card-arrivals {
        margin-right: 2rem;
        text-decoration: none;
        img {
            width: 284px;
            height: 284px;
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
        img {
            width: 1.5rem;
            height: 1.5rem;
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
    overflow-x: auto;
    &::-webkit-scrollbar{
        display: none;
    } 
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
        {
          allProducts.map((arrivals) => (
            <div key={arrivals.id} className="card-arrivals">
              <img src={arrivals.img} alt="imagem de bolsa cor de rosa" />
              <div className="arrivals-like">
                <p className="arrivals-info">{arrivals.arrivalsInfo}</p>
                <img src={icons.Like_black} alt="icone de coração" />
              </div>
              <p className="arrivals-name">{arrivals.arrivalsName}</p>
              <p className="arrivals-price">{arrivals.arrivalsPrice}</p>
            </div>
          ))
        }
    </StyledArrivalsCard>
  );
};
export default ArrivalsCard;
