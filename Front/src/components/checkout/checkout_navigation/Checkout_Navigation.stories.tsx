import CheckoutNavigation from "./Checkout_Navigation";
import { StyledAll } from "../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: CheckoutNavigation
}

export const PageCheckoutNavigation: Story = () => ( 
    <>
        <StyledAll />
        <CheckoutNavigation />
    </> 
) 