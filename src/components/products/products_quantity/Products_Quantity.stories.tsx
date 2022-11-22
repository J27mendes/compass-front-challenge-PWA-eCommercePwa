import ProductsQuantity from "./Products_Quantity";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsQuantity
}

export const PageProductsQuantity: Story = () => (
    <>
        <StyledAll /> 
        <ProductsQuantity />
    </>
)  