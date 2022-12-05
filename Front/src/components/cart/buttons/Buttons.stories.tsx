import Buttons from "./Buttons";
import { StyledAll } from "../../../globalStyles/Reset";
import { Story }  from '@storybook/react';

export default {
    title: 'component/Cart',
    component: Buttons
}

export const PageButtons: Story = () => ( 
    <>
        <StyledAll />
        <Buttons />
    </> 
) 