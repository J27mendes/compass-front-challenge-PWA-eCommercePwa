import { Story } from "@storybook/react";
import  PwaMobile  from "./PwaMobile";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: PwaMobile
}

export const PagePwaMobile: Story = () => (  
    <> 
        <StyledAll />
        <PwaMobile /> 
    </>    
) 