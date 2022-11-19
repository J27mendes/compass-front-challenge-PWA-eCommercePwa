import Styled from "styled-components";
import Colors from "../../Colors";
import { icons } from "../../components/Images";

const StyledProductDelivery = Styled.div`
    display: flex; 
    align-items: center;  
    margin-top: 2rem;
    .delivery-details {
        margin-right: 1.5rem;
        p {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
        }
        .delivery-date {
            width: 200px;
            color: ${Colors.low_emphasis};
            font-size: 1rem;
            line-height: 1.2rem;
        }
    }
    .delivery-apply {
        width: 400px;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${Colors.grey};
        border-radius: 5px;
        .delivery-apply-pincode {
            margin-left: 1rem;
            font-size: 1rem;
            font-weight: 500;
        }
        .delivery-check {
            margin-right: 1rem;
            color: ${Colors.primary};
            font-size: 0.9rem;
            font-weight: 600;
        }
    }
`;

const ProductDelivery = () => {
    return (
        <StyledProductDelivery>
            <div className="delivery-details">
                <p>Delivery Details</p>
                <p className="delivery-date">Check estimated delivery date/pickup option.</p>
            </div>
            <div className="delivery-apply">
                <span className="delivery-apply-pincode">Apply Valid Pincode</span>
                <span className="delivery-check">CHECK</span>
            </div>
        </StyledProductDelivery>        
    )
}

export default ProductDelivery