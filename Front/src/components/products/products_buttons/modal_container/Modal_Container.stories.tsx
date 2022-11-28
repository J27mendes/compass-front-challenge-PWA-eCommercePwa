import ModalContainer from "./Modal_Container";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Modal',
    component: ModalContainer
}

export const PageModalContainer: Story = () => ( 
    <>
        <StyledAll />
        <ModalContainer />
    </>
)  