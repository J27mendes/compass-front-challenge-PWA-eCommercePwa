import ProductsLists from "./Products_lists";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsLists
}

export const PageProductsLists: Story = () => (
    <>
        <StyledAll /> 
        <ProductsLists />
    </>
)  