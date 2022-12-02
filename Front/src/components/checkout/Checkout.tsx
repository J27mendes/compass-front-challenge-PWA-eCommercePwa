import Styled from 'styled-components';
import Sumary from '../cart/sumary/Sumary';
import Header from '../header/Header';
import CheckoutNavigation from './checkout_navigation/Checkout_Navigation';
import NewAddress from './new_address/New_Address';
import CartPage from '../cart/cart_page/Cart_page';
import Footer from '../footer/Footer';
import Backcart from './back_cart/Back_Cart';

const StyledCheckout = Styled.div`
    display: flex;
    margin-bottom: 2rem;
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
                    <NewAddress address={'Add New Address'} contact={'Contact Information'}/>
                    <NewAddress select={'Select Payment Method'} payment={'Payments'} />
                    <Backcart />
                </section>
                <Sumary />
            </StyledCheckout>
            <Footer />
        </>
    )
}