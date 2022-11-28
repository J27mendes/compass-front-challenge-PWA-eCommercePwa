import  Home  from "./Home";
import { StyledAll } from "../../globalStyles/Reset";
import { Story } from '@storybook/react';

export default {
    title: 'Intro',
    component: Home
}

export const PageHome: Story = () => (  
    <> 
        <StyledAll />
        <Home /> 
    </>    
) 
