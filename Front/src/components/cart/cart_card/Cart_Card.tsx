import Styled from "styled-components";
import CartImg from "./cart_img/Cart_img";
import CartMoveRemove from "./cart_move_remove/Cart_Move_Remove";
import CartNextContainer from "./cart_next_container/Cart_Next_Container";
import CartProducts from "./cart_products/Cart_Products";

const StyledCartCard = Styled.div`
.column-container-cart {
    display: flex;
    justify-content: space-between; 
    width: 85%;   
    margin-left: 2rem;
    margin-bottom: 2rem;
    .cart-container {
        display: flex;
        align-items: center;
    }
    .cart-next-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
`;
export default function CartCard () {
    return (
        <StyledCartCard>
            <div className="column-container-cart">
                <div className="cart-container">
                    <CartImg />
                    <CartProducts />                
                </div>
                <div className="cart-next-container">
                    <CartNextContainer />
                    <CartMoveRemove />                                
                </div>
            </div>
            <div className="column-container-cart">
                <div className="cart-container">
                    <CartImg />
                    <CartProducts />                
                </div>
                <div className="cart-next-container">
                    <CartNextContainer />
                    <CartMoveRemove />                                
                </div>
            </div>
        </StyledCartCard>
    )
}