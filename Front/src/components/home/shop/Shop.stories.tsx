import Shop from "./Shop";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: Shop

}

export const PageShop: Story = () => ( 
    <>
        <StyledAll />
        <Shop />
    </>
)  