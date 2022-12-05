import SelectOtherMethod from "./Select_Other_Method";
import { StyledAll } from "../../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: SelectOtherMethod
}

export const PageSelectOtherMethod: Story = () => ( 
    <>
        <StyledAll />
        <SelectOtherMethod />
    </> 
) 