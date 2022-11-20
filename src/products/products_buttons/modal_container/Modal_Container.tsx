import Styled from "styled-components";
import Colors from "../../../Colors";
import { icons, products } from "../../../components/Images";

const StyledModalContainer = Styled.div`
    display: flex;
    margin-top: 2rem;
        img {
            width: 75px;
            height: 75px;
            border-radius: 8px;
        }
        .modal-products {
            display: flex;
        }
    }
    .modal-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .modal-info{
            margin-left: 1rem;
            .modal-info-name {
                font-weight: 600;
                color: ${Colors.primary};
            }
            .modal-info-description {
                margin: 0.5rem 0; 
                color: ${Colors.low_emphasis};
            }
            .quantity-details {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 5rem;
                height: 4.5vh;
                border-radius: 5px;
                border: solid 1px ${Colors.primary_tinty};
                .quantity-change-minus {
                    font-size: 2.2rem;
                }
                p {
                    font-size: 1rem;
                    font-weight: 400;
                }
                .quantity-change-plus {
                    font-size: 1.8rem;
                }           
            }
        }
        .modal-close {
            img{
                width: 25px;
                height: 25px;
                margin-left: 2rem;
                margin-bottom: 2rem;
            }
            p {
              font-size: 0.9rem;
              font-weight: 500;
            }
        }
    }    
`;

const ModalContainer = () => {
  return (
    <StyledModalContainer>
      <img src={products.Duffle_1} alt="imagem de bolsa com alça de couro" />
      <div className="modal-container">
        <div className="modal-info">
          <p className="modal-info-name">Coach</p>
          <p className="modal-info-description">Leather Coach Bag</p>
          <div className="quantity-details">
            <div className="quantity-change-minus">-</div>
            <p>1</p>
            <div className="quantity-change-plus">+</div>
          </div>
        </div>
        <div className="modal-close">
          <img src={icons.Close} alt="icone X para fechar o modal" />
          <p>$54.69</p>
        </div>
      </div>
    </StyledModalContainer>
  );
};
export default ModalContainer;
