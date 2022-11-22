import BannerMinor from "./Banner_Minor";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: BannerMinor

}

export const PageBannerMinor: Story = () => ( 
    <>
        <StyledAll />
        <BannerMinor />
    </>
)  