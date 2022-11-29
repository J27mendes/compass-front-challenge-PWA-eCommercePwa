import Styled from "styled-components";
import Buttons from "../../buttons/Buttons";

const StyledSumaryPrice = Styled.div`
margin-top: 2rem;
.sumary-price {
    display: flex;
    justify-content: space-between;
    margin: 1rem 1rem 1rem 0;
    p {
        font-weight: 500;
    }
    .price-weight {
        font-weight: 600;
    }
    .price-weight-total {
        font-weight: 700;
    }
}    
`;

export default function SumaryPrice () {
    return (
        <>
            <StyledSumaryPrice>
                <div className="sumary-price">
                    <p>Sub Total</p>
                    <p className="price-weight">$119.69</p>
                </div>
                <div className="sumary-price">
                    <p>Discount</p>
                    <p className="price-weight">-$13.40</p>
                </div>
                <div className="sumary-price">
                    <p>Delivery Fee</p>
                    <p className="price-weight">-$0.00</p>
                </div> 
                <div className="sumary-price">
                    <p className="price-weight-total">Grand Total</p>
                    <p className="price-weight-total">$106.29</p>
                </div>           
            </StyledSumaryPrice>
            <Buttons />
        </>
        
    )
}