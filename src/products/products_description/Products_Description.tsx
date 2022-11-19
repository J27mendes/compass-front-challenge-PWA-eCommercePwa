import Styled from "styled-components";
import Colors from "../../Colors";

const StyledProductsDescription = Styled.ul`
    display: flex;
    background-color: ${Colors.grey};
    padding: 0.5rem;
    margin: 2rem;
    border-radius: 8px;
    li {
        margin-left: 0.5rem;
        margin-right: 2rem;
        padding: 0.5rem 1rem;
    }
    li:hover {        
        background-color: ${Colors.primary};        
        border-radius: 8px;
        color: ${Colors.bright};
    }
`;

const ProductsDescription = () => {
    return (
        <StyledProductsDescription>
            <li>Product Description</li>
            <li>Related Products</li>
            <li>Ranting and Reviews</li>
        </StyledProductsDescription>
    )
}
export default ProductsDescription