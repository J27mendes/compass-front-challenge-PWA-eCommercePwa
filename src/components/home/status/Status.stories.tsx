import Status from "./Status";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: Status

}

export const PageStatus: Story = () => ( 
    
    <>
        <StyledAll />
        <Status />
    </>
)  