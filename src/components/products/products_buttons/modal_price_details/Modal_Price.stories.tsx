import ModalPriceDetails from "./Modal_Price_Details";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Modal',
    component: ModalPriceDetails
}

export const PageModalPrice: Story = () => (
    <>
        <StyledAll /> 
        <ModalPriceDetails />
    </>
)  