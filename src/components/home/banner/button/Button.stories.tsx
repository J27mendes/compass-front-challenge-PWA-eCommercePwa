import Button from "./Button";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: Button
}

export const PageButton: Story = () => ( 
    <>
        <StyledAll />
        <Button />
    </>
)  