import Styled from 'styled-components';
import Sumary from '../cart/sumary/Sumary';
import Header from '../header/Header';
import CheckoutNavigation from './checkout_navigation/Checkout_Navigation';
import NewAddress from './new_address/New_Address';
import CartPage from '../cart/cart_page/Cart_page';

const StyledCheckout = Styled.div`
    display: flex;
    .box-container-checkout {
        width: 85%;
    } 
`;

export default function Checkout (){
    return (
        <>
            <Header/> 
            <CheckoutNavigation />   
            <CartPage title={'Checkout'}/>          
            <StyledCheckout>
                <section className="box-container-checkout">
                    <NewAddress />
                </section>
                <Sumary />
            </StyledCheckout>
        </>
    )
}