import InfoCheck from "./Info_Check";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Category',
    component: InfoCheck
}

export const PageInfoCheck: Story = () => ( 
    <>
        <StyledAll />
        <InfoCheck />
    </>
)  