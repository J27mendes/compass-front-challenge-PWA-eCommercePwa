import ProductsButtons from "./Products_Buttons";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: ProductsButtons
}

export const PageProductsButtons: Story = () => ( 
    <ProductsButtons />
)  