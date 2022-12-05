import MethodUpi from "./Method_Upi";
import { StyledAll } from "../../../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: MethodUpi
}

export const PageMethodUpi: Story = () => ( 
    <>
        <StyledAll />
        <MethodUpi />
    </> 
) 