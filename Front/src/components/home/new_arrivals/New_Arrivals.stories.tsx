import NewArrivals from "./New_Arrivals";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: NewArrivals

}

export const PageNewArrivals: Story = () => ( 
    <>
        <StyledAll />
        <NewArrivals />
    </>
)  