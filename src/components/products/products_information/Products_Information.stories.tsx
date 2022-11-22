import ProductsInfo from "./Products_Info";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsInfo
}

export const PageProductsInfo: Story = () => (
    <>
        <StyledAll /> 
        <ProductsInfo />
    </>
)  