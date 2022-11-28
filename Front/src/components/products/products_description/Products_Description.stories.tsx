import ProductsDescription from "./Products_Description";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsDescription
}

export const PageProductsDescription: Story = () => (
    <>
        <StyledAll /> 
        <ProductsDescription />
    </>
)  