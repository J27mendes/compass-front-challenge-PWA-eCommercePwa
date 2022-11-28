import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledProductsInfo = Styled.div`
    width: 1160px;
    margin-bottom: 7rem;
    p {
        font-weight: 500;
        color: ${Colors.low_emphasis};
        margin-bottom: 2rem;
        margin-left: 2rem;
        line-height: 1.2rem;
    }
    
`

const ProductsInfo = () => {
    return (
        <StyledProductsInfo>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.</p>
            <p>Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.</p>
            <p>Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.</p>
        </StyledProductsInfo>
    )
}
export default ProductsInfo