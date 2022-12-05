import  MakeSkincare  from "./Make";
import { Story } from "@storybook/react";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: MakeSkincare
}

export const PageMakeSkincare: Story = () => (  
    <> 
        <StyledAll />
        <MakeSkincare /> 
    </>    
) 