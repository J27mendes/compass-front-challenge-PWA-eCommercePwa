import ProductsDetails from "./Products_details";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsDetails
}

export const PageProductsDetails: Story = () => (
    <>
        <StyledAll /> 
        <ProductsDetails />
    </>
)  