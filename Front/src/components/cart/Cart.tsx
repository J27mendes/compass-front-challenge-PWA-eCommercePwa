import Styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CartApplyCode from "./cart_apply_code/Cart_Aply_Code";
import CartCard from "./cart_card/Cart_Card";
import CartNavigation from "./cart_navigation/Cart_Navigation";
import CartPage from "./cart_page/Cart_page";
import ProductListInfo from "./product_list_info/Product_List_Info";
import Sumary from "./sumary/Sumary";

const StyledCart = Styled.div`
display: flex;
margin-top: 3rem;
margin-bottom: 2rem;
.box-container {
    width: 100%;
}
`;

export default function Cart () {
    return (
        <>
            <Header />
            <CartNavigation />
            <CartPage title={'My Cart'} />
            <StyledCart> 
            <section className="box-container">           
                <ProductListInfo />
                <CartCard />
                <CartApplyCode />
            </section>
            <Sumary />
            </StyledCart> 
            <Footer />
        </>       
    )
}