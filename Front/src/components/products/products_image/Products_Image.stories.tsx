import ProductsImage from "./Products_image";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsImage
}

export const PageProductsImage: Story = () => (
    <>
        <StyledAll /> 
        <ProductsImage />
    </>
)  