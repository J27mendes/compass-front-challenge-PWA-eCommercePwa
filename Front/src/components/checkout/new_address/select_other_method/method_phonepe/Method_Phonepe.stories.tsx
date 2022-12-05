import MethodPhonepe from "./Method_Phonepe";
import { StyledAll } from "../../../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: MethodPhonepe
}

export const PageMethodPhonepe: Story = () => ( 
    <>
        <StyledAll />
        <MethodPhonepe />
    </> 
) 