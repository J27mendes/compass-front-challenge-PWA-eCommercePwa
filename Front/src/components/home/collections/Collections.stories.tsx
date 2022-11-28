import Collections from "./Collections";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Home',
    component: Collections

}

export const PageCollections: Story = () => ( 
    <>
        <StyledAll />
        <Collections />
    </>
)  