import { Story } from "@storybook/react";
import  Make  from "./Make";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: Make
}

export const PageMake: Story = () => (  
    <> 
        <StyledAll />
        <Make /> 
    </>    
) 