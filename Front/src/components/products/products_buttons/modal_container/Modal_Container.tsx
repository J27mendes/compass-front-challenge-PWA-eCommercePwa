import { useState, useEffect } from "react";
import useContext from '../../../../context/useContext';
import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";
import { icons } from "../../../../globalStyles/Images";

const StyledModalContainer = Styled.div`
    display: flex;
    margin-top: 1rem;
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

const ModalContainer = ({image, info, name, price}: any) => {
  const [value, setValue] = useState(0);
  const { products } = useContext();

    useEffect(() => {
    setValue(products)
  },[products])

  function minus (){
      if(value > 0){
        setValue(valueAfter => valueAfter - 1)
    } else {
        setValue(0)
    }  
  }

  function plus(){
      setValue(valueAfter => valueAfter + 1)
  }

  return (
    <StyledModalContainer>
      <img src={image} alt="imagem de bolsa com alça de couro" />
      <div className="modal-container">
        <div className="modal-info">
          <p className="modal-info-name">{name}</p>
          <p className="modal-info-description">{info}</p>
          <div className="quantity-details">
            <div onClick={minus} className="quantity-change-minus">-</div>
            <p>{value}</p>
            <div onClick={plus} className="quantity-change-plus">+</div>
          </div>
        </div>
        <div className="modal-close">
          <img src={icons.Close} alt="icone X para fechar o modal" />
          <p>{`$${(price * value).toFixed(2)}`}</p>
        </div>
      </div>
    </StyledModalContainer>
  );
};
export default ModalContainer;
