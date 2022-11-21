import Banner from "./Banner";
import { Story } from '@storybook/react';

export default {
    title: 'component/Home',
    component: Banner

}

export const PageBanner: Story = () => ( 
    <Banner />
)  