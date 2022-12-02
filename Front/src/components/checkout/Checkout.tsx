import Styled from 'styled-components';
import Header from '../header/Header';
import CheckoutNavigation from './checkout_navigation/Checkout_Navigation';
import NewAddress from './new_address/New_Address';
import CartPage from '../cart/cart_page/Cart_page';
import Footer from '../footer/Footer';
import Backcart from './back_cart/Back_Cart';
import CartProducts from '../cart/cart_card/cart_products/Cart_Products';
import CartImg from '../cart/cart_card/cart_img/Cart_img';
import OrderSumary from '../cart/sumary/order_sumary/Order_Sumary';
import SumaryInfo from '../cart/sumary/sumary_price/sumary_info/Sumary_Info';

const StyledCheckout = Styled.div`
    display: flex;
    margin-bottom: 2rem;
    .box-container-checkout {
        width: 85%;
    } 
    .box-container-order {
        width: 35%;
        .container-order {
            margin: 2.5rem 0;
            display: flex;
        }
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
                <section className="box-container-order">
                    <OrderSumary title={'Order Sumary'}/> 
                    <div className="container-order">
                        <CartImg />
                        <CartProducts />
                    </div>
                    <div className="container-order">
                        <CartImg />
                        <CartProducts />
                    </div>
                    <OrderSumary title={'Order Details'} /> 
                    <SumaryInfo />
                </section>
            </StyledCheckout>
            <Footer />
        </>
    )
}