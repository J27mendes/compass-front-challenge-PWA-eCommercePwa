import ProductsButtons from "./Products_Buttons";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsButtons
}

export const PageProductsButtons: Story = () => ( 
    <>
        <StyledAll />
        <ProductsButtons />
    </>
)  