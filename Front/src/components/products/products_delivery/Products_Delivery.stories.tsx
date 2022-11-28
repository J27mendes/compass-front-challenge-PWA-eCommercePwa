import ProductsDelivery from "./Products_Delivery";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsDelivery
}

export const PageProductsDelivery: Story = () => (
    <>
        <StyledAll /> 
        <ProductsDelivery />
    </>
)  