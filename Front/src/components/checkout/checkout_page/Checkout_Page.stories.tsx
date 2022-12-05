import CheckoutPage from "./Checkout_Page";
import { StyledAll } from "../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: CheckoutPage
}

export const PageCheckoutPage: Story = () => ( 
    <>
        <StyledAll />
        <CheckoutPage />
    </> 
) 