import ArrivalsCard from "./Arrivals_Card";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: ArrivalsCard
}

export const PageArrivalsCard: Story = () => ( 
    <>
        <StyledAll />
        <ArrivalsCard />
    </>
)  