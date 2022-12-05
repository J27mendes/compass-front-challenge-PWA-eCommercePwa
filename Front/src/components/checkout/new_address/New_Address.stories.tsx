import NewAddress from "./New_Address";
import { StyledAll } from "../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: NewAddress
}

export const PageNewAddress: Story = () => ( 
    <>
        <StyledAll />
        <NewAddress />
    </> 
) 