import Header from "./Header";
import { StyledAll } from "../../globalStyles/Reset";
import { Story } from '@storybook/react';

export default {
    title: 'component/Home',
    component: Header
}

export const PageHeader: Story = () => ( 
    <>
        <StyledAll />
        <Header />
    </> 
)  