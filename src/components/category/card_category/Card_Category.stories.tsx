import CardCategory from "./Card_Category";
import { Story } from '@storybook/react';
import { StyledAll } from "../../../globalStyles/Reset";

export default {
    title: 'component/Category',
    component: CardCategory
}

export const PageCardCategory: Story = () => (
    <>
        <StyledAll /> 
        <CardCategory />
    </>
)  