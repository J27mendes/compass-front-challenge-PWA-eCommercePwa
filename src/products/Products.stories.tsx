import Products from "./Products";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: Products
}

export const PageProducts: Story = () => ( 
    <Products />
)  