import Navigation from "./Navigation";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Category',
    component: Navigation
}

export const PageNavigation: Story = () => ( 
    <>
        <StyledAll />
        <Navigation />
    </>
)  