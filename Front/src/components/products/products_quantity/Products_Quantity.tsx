import { useState } from "react";
import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import useContext from '../../../context/useContext';

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
            cursor: pointer;
        }
        p {
            font-size: 1rem;
            margin-left: 1rem;
            font-weight: 400;
        }
        .quantity-change-plus {
            font-size: 1.8rem;
            cursor: pointer;
        }           
    }
`;

const ProductQuantity = () => {
    const [value, setValue] = useState(1);
    const { setProducts } = useContext();

    function minus(){
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
        <StyledProductQuantity>
            <p>Quantity:</p>  
            <div className="quantity-details">
                <div onClick={() => {minus() ; setProducts(value)}} className="quantity-change-minus">-</div>
                <p>{value}</p>
                <div onClick={() => {plus() ; setProducts(value)}} className="quantity-change-plus">+</div>
            </div>          
        </StyledProductQuantity>       
    )
}
export default ProductQuantity