import ModalPlaceButton from "./Modal_Place_Button";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Modal',
    component: ModalPlaceButton
}

export const PageModalPlaceButton: Story = () => ( 
    <>
        <StyledAll />
        <ModalPlaceButton />
    </>
)  