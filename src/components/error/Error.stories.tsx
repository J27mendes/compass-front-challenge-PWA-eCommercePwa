import Error from "./Error";
import { Story } from '@storybook/react';
import { StyledAll } from "../../globalStyles/Reset";

export default {
    title: 'component/Error',
    component: Error
}

export const PageError: Story = () => ( 
    <>
        <StyledAll />
        <Error />
    </>
)  