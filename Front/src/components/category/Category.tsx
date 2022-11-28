import Styled from "styled-components";
import { imgs } from "../../globalStyles/Images";
import Footer from "../footer/Footer"
import Header from "../header/Header"
import InfoProducts from "./info_products/Info_Products";
import Navigation from "./navigation/Navigation";

const StyledCategory = Styled.section`
    margin: 5rem 2rem;
`;

const Category = () => {
    return (
        <>
            <Header />
            <StyledCategory>
                <img src={imgs.Banner_category} alt="imagem de bolsa preta"/>
            </StyledCategory> 
            <Navigation /> 
            <InfoProducts />          
            <Footer />
        </>
    )
}

export default Category