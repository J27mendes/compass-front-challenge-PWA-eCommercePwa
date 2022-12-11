import { useEffect, useState } from 'react';
import Styled from "styled-components";
import ProductsDetails from "../products_details/Products_details";
import ProductsList from "../products_lists/Products_lists";
import { useParams } from 'react-router-dom';
import { allProducts } from '../../../mock';

const StyledProductsImage = Styled.section`
display: flex;
    img {
        width: 605px;
        height: 605px;
        border-radius: 15px;
        margin: 0 1.5rem 1rem 2rem;
    }
`;

const ProductsImage = ({image}:any) => {
    const { id } = useParams();
    const [cardProduct, setProduct] = useState<any>({})
    useEffect(() => {        
        const [newProducts] = allProducts.filter((product) => product.id === Number(id))
        setProduct(newProducts)
    },[id])  
    return (
        <>
            <StyledProductsImage>
                <img src={image} alt="bolsa com alça de couro" />
                <ProductsDetails info={cardProduct.arrivalsInfo} name={cardProduct.arrivalsName} price={cardProduct.arrivalsPrice}/>
            </StyledProductsImage> 
            <ProductsList figure={cardProduct.img}/>              
        </>    
    )
}

export default ProductsImage