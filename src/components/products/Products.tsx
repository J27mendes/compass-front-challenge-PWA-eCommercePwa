import Styled from "styled-components";
import Colors from "../../globalStyles/Colors";
import { icons } from "../../globalStyles/Images";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ProductsDescription from "./products_description/Products_Description";
import ProductsImage from "./products_image/Products_image";
import ProductsInfo from "./products_information/Products_Info";

const StyledProducts = Styled.section`
    display: flex;
    margin-left: 2rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    .navigation-first-page {
        font-weight: 600;
        color: ${Colors.primary};
        margin-right: 1rem;
    }
    img {
        margin-right: 1rem;
    }
    .navigation-next-page {
        font-weight: 500;
        color: ${Colors.low_emphasis};
        margin-right: 1rem;
    }
`;


const Products = () => {
    return (
        <>
            <Header />
            <StyledProducts>
                    <p className="navigation-first-page">Home</p>
                    <img src={icons.Cut_arrow_black} alt="sinal de maior q"/> 
                    <p className="navigation-first-page">Handbag</p>
                    <img src={icons.Cut_arrow_black} alt="sinal de maior q"/> 
                    <p className="navigation-next-page">Label</p>
            </StyledProducts>
            <ProductsImage />
            <ProductsDescription />
            <ProductsInfo /> 
            <Footer />
        </>
    )
}

export default Products