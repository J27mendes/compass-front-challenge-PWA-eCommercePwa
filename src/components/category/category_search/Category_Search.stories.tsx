import CategorySearch from "./Category_Search";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Category',
    component: CategorySearch
}

export const PageCategorySearch: Story = () => (
    <>
        <StyledAll /> 
        <CategorySearch />
    </>
)  