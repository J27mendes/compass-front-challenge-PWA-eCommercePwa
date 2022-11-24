import { Story } from "@storybook/react";
import  HomeMobile  from "./Home_Mobile";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: HomeMobile
}

export const PageHomeMobile: Story = () => (  
    <> 
        <StyledAll />
        <HomeMobile /> 
    </>    
) 