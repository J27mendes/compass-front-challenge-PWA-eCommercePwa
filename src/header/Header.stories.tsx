import Header from "./Header";
import { Story } from '@storybook/react';

export default {
    title: 'component/Home',
    component: Header
}

export const PageHeader: Story = () => ( 
    <Header />
)  