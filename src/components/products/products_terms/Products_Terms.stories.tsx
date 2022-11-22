import ProductsTerms from "./Products_terms";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Products',
    component: ProductsTerms
}

export const PageProductsTerms: Story = () => (
    <>
        <StyledAll /> 
        <ProductsTerms />
    </>
)  