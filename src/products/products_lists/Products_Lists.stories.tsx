import ProductsLists from "./Products_lists";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: ProductsLists
}

export const PageProductsLists: Story = () => ( 
    <ProductsLists />
)  