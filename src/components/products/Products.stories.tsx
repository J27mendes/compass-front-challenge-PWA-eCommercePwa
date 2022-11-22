import Products from "./Products";
import { Story } from '@storybook/react';
import { StyledAll } from "../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: Products
}

export const PageProducts: Story = () => (
    <>
        <StyledAll /> 
        <Products />
    </>
)  