import SelectMethod from "./Select_Method";
import { StyledAll } from "../../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: SelectMethod
}

export const PageSelectMethod: Story = () => ( 
    <>
        <StyledAll />
        <SelectMethod />
    </> 
) 