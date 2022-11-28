import { Story } from '@storybook/react';
import  TopCategories from "./Top_Categories";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: TopCategories
}

export const PageTrending: Story = () => (  
    <> 
        <StyledAll />
        <TopCategories/> 
    </>    
) 