import ProductsDescription from "./Products_Description";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: ProductsDescription
}

export const PageProductsDescription: Story = () => ( 
    <ProductsDescription />
)  