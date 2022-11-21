import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledProductQuantity = Styled.div`
    display: flex;
    align-items: center;
    p {
        font-weight: 600;
        font-size: 1.2rem;
        margin-right: 1rem;
    }
    .quantity-details {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0.2rem; 
        height: 4.5vh;
        border-radius: 5px;
        border: solid 1px ${Colors.primary_tinty};
        .quantity-change-minus {
            font-size: 2.2rem;
        }
        p {
            font-size: 1rem;
            margin-left: 1rem;
            font-weight: 400;
        }
        .quantity-change-plus {
            font-size: 1.8rem;
        }           
    }
`;

const ProductQuantity = () => {
    return (
        <StyledProductQuantity>
            <p>Quantity:</p>  
            <div className="quantity-details">
                <div className="quantity-change-minus">-</div>
                <p>1</p>
                <div className="quantity-change-plus">+</div>
            </div>          
        </StyledProductQuantity>       
    )
}
export default ProductQuantity