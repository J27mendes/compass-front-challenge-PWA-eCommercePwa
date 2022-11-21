import ProductsDetails from "./Products_details";
import { Story } from '@storybook/react';

export default {
    title: 'component/Products',
    component: ProductsDetails
}

export const PageProductsDetails: Story = () => ( 
    <ProductsDetails />
)  