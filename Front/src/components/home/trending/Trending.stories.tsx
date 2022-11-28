import { Story } from '@storybook/react';
import  Trending  from "./Trending";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: Trending
}

export const PageTrending: Story = () => (  
    <> 
        <StyledAll />
        <Trending /> 
    </>    
) 