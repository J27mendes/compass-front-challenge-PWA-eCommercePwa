import ProductsInfo from "./Products_Info";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: ProductsInfo
}

export const PageProductsInfo: Story = () => ( 
    <ProductsInfo />
)  