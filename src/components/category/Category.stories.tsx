import Category from "./Category";
import { StyledAll } from "../../globalStyles/Reset";
import { Story } from '@storybook/react';

export default {
    title: 'component/Category',
    component: Category
}

export const PageCategory: Story = () => ( 
    <>
        <StyledAll />
        <Category />
    </>
)  