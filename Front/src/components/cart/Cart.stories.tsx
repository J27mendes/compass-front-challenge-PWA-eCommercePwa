import Cart from "./Cart";
import { StyledAll } from "../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Cart',
    component: Cart
}

export const PageBackCart: Story = () => ( 
    <>
        <StyledAll />
        <Cart />
    </> 
) 