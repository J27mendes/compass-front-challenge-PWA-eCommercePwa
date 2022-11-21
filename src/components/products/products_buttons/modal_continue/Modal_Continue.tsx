import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";

const StyledModalContinue = Styled.a`
display: flex;
justify-content: center;
margin-top: 1.5rem;
color: ${Colors.primary};
font-size: 0.9rem;
font-weight: 600;
text-decoration: underline;
`;
const ModalContinue = () => {
    return (
        <StyledModalContinue>
            Continue Shopping
        </StyledModalContinue>
    )
}
export default ModalContinue