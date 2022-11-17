import Styled from "styled-components";
import { imgs } from "../components/Images";
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Navigation from "./navigation/Navigation";

const StyledCategory = Styled.section`
    margin: 1.5rem 2rem;
`;

const Category = () => {
    return (
        <>
            <Header />
            <StyledCategory>
                <img src={imgs.Banner_category} alt="imagem de bolsa preta"/>
            </StyledCategory> 
            <Navigation />           
            <Footer />
        </>
    )
}

export default Category