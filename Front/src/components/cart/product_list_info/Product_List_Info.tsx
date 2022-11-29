import Styled from "styled-components";

const StyledProductListInfo = Styled.div`
width: 85%; 
height: 3vh; 
margin-left: 2rem;
margin-bottom: 2rem;
.product-cart-container {
display: flex; 
justify-content: space-between;
    .info-cart {
        width: 36%;
        display: flex;
        justify-content: space-between;
    }
}
`;

export default function ProductListInfo (){
    return (  
        <>     
            <StyledProductListInfo>
                <div className="product-cart-container">
                    <p>Product Name</p>
                    <div className="info-cart">
                        <p>Price</p>
                        <p>Qty</p>
                        <p>Subtotal</p>
                    </div>
                </div>
                <hr />
            </StyledProductListInfo>               
        </>     
    )
}