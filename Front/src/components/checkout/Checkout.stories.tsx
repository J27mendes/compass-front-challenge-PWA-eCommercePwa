import Checkout from "./Checkout";
import { StyledAll } from "../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: Checkout
}

export const PageCheckout: Story = () => ( 
    <>
        <StyledAll />
        <Checkout />
    </> 
)  