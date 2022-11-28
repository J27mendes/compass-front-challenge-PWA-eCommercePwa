import ModalCheck from "./Modal_Check";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Modal',
    component: ModalCheck
}

export const PageModalCheck: Story = () => ( 
    <>
        <StyledAll />
        <ModalCheck />
    </>
)  