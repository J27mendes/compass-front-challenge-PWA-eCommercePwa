import ProductsImage from "./Products_image";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: ProductsImage
}

export const PageProductsImage: Story = () => ( 
    <ProductsImage />
)  