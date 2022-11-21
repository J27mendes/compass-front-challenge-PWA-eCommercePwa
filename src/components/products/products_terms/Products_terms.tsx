import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledProductTerms = Styled.div`
margin-top: 2rem;
display: flex;
.product-terms {    
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px ${Colors.primary};
    border-radius: 5px;
    width: 390px;
    padding: 1rem;
    margin-right: 2rem;
    .product-terms-conditions {
        width: 220px;
        .terms-descont{
            font-weight: 600;
        }
        .terms-conditions {
            margin-top: 0.5rem;
            color: ${Colors.primary};
            font-weight: 600;
            font-size: 0.9rem;
        }
    }
    .product-code {
        padding: 1rem;
        background-color: ${Colors.grey};
        border-radius: 5px;
        text-align: center;
        .code {
            font-size: 0.9rem;
            font-weight: 600;
            color: ${Colors.low_emphasis}
        }
        .product-order {
            margin-top: 0.5rem;
            font-weight: 600;
        }
    }
}    
`;

const ProductsTerms = () => {
    return (   
        <StyledProductTerms>
            <div className="product-terms">
                <div className="product-terms-conditions">
                    <p className="terms-descont">Get upto 30% Off on order value above $100</p>
                    <p className="terms-conditions">Terms & Conditions</p>
                </div>
                <div className="product-code">
                    <p className="code">Use Code</p>
                    <p className="product-order">ORDER100</p>
                </div>
            </div>
            <div className="product-terms">
                <div className="product-terms-conditions">
                    <p className="terms-descont">Get upto 30% Off on order value above $100</p>
                    <p className="terms-conditions">Terms & Conditions</p>
                </div>
                <div className="product-code">
                    <p className="code">Use Code</p>
                    <p className="product-order">ORDER100</p>
                </div>
            </div>
        </StyledProductTerms>       
    )
}

export default ProductsTerms