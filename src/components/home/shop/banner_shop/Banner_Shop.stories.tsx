import BannerShop from "./Banner_Shop";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: BannerShop
}

export const PageBannerShop: Story = () => ( 
    <>
        <StyledAll />
        <BannerShop />
    </>
)  