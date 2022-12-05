import { Story } from "@storybook/react";
import  ImageTrending  from "./Image_trending";
import { StyledAll } from "../../../globalStyles/Reset";


export default {
    title: 'component/Home',
    component: ImageTrending
}

export const PageImagesTrending: Story = () => (  
    <> 
        <StyledAll />
        <ImageTrending /> 
    </>    
) 