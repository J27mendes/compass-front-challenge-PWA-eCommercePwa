import Banner from "./Banner";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: Banner
}

export const PageBanner: Story = () => (
    <>
        <StyledAll /> 
        <Banner />
    </>
)  