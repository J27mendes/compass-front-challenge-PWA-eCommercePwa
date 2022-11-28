import { Story } from "@storybook/react";
import  ImagesTrending  from "./Image_trending";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: ImagesTrending
}

export const PageImagesTrending: Story = () => (  
    <> 
        <StyledAll />
        <ImagesTrending /> 
    </>    
) 