import MethodPatytm from "./Method_Paytm";
import { StyledAll } from "../../../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: MethodPatytm
}

export const PageMethodPatytm: Story = () => ( 
    <>
        <StyledAll />
        <MethodPatytm />
    </> 
) 