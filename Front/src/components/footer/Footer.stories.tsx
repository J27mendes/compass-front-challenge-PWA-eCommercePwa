import Footer from "./Footer";
import { Story } from '@storybook/react';
import { StyledAll } from "../../globalStyles/Reset";

export default {
    title: 'component/Footer',
    component: Footer
}

export const PageFooter: Story = () => (
    <>
        <StyledAll/> 
        <Footer />
    </>
)  