import ModalContinue from "./Modal_Continue";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Modal',
    component: ModalContinue
}

export const PageModalContinue: Story = () => ( 
    <>
        <StyledAll />
        <ModalContinue />
    </>
)  