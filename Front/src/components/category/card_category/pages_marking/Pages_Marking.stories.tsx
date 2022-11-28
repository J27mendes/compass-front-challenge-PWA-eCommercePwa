import PagesMarking from "./Pages_Marking";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../../globalStyles/Reset";

export default {
    title: 'component/Category',
    component: PagesMarking
}

export const PagePagesMarking: Story = () => (
    <>
        <StyledAll /> 
        <PagesMarking />
    </>
)  