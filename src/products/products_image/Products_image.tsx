import Styled from "styled-components";
import { products } from "../../components/Images";
import ProductsDetails from "../products_details/Products_details";
import ProductsList from "../products_lists/Products_lists";

const StyledProductsImage = Styled.section`
display: flex;
    img {
        width: 605px;
        height: 605px;
        border-radius: 15px;
        margin: 0 1.5rem 1rem 2rem;
    }
`;

const ProductsImage = () => {
    return (
        <>
            <StyledProductsImage>
                <img src={products.Duffle_1} alt="bolsa com alça de couro" />
                <ProductsDetails />
            </StyledProductsImage> 
            <ProductsList />              
        </>    
    )
}

export default ProductsImage