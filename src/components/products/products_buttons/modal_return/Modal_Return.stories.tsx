import ModalReturn from "./Modal_Return";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Modal',
    component: ModalReturn
}

export const PageModalReturn: Story = () => ( 
    <>
        <StyledAll />
        <ModalReturn />
    </>
)  