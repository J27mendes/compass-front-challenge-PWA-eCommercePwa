import Pwa from "./PwaMobile";
import { Story } from "@storybook/react";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: Pwa
}

export const PagePwaMobile: Story = () => (  
    <> 
        <StyledAll />
        <Pwa /> 
    </>    
) 