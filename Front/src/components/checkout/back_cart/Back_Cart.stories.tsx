import BackCart from "./Back_Cart";
import { StyledAll } from "../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: BackCart
}

export const PageBackCart: Story = () => ( 
    <>
        <StyledAll />
        <BackCart />
    </> 
) 