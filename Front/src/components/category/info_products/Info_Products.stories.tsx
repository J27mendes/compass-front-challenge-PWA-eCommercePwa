import InfoProducts from "./Info_Products";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Category',
    component: InfoProducts
}

export const PageInfoProducts: Story = () => ( 
    <>
        <StyledAll />
        <InfoProducts />
    </>
)  