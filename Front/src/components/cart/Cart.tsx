import Styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CartNavigation from "./cart_navigation/Cart_Navigation";
import CartPage from "./cart_page/Cart_page";

const StyledCart = Styled.div`
display: flex;
justify-content: space-between;
margin-top: 6rem;
`

export default function Cart () {
    return (
        <>
            <Header />
            <CartNavigation />
            <CartPage />
            <StyledCart>            
                <div>???</div>
            </StyledCart> 
            <Footer />
        </>       
    )
}