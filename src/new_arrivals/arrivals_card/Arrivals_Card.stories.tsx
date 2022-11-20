import ArrivalsCard from "./Arrivals_Card";
import { Story } from '@storybook/react';

export default {
    title: 'component/Home',
    component: ArrivalsCard
}

export const PageArrivalsCard: Story = () => ( 
    <ArrivalsCard />
)  