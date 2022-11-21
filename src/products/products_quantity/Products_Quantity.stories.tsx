import ProductsQuantity from "./Products_Quantity";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: ProductsQuantity
}

export const PageProductsQuantity: Story = () => ( 
    <ProductsQuantity />
)  