import InputsAddress from "./Inputs_Address";
import { StyledAll } from "../../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Checkout',
    component: InputsAddress
}

export const PageInputsAddress: Story = () => ( 
    <>
        <StyledAll />
        <InputsAddress />
    </> 
) 