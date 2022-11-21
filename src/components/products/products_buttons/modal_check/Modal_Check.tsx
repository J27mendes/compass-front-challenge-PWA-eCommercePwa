import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";

const StyledModalCheck = Styled.div`
margin-top: 1rem;
width: 360px;
height: 8vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${Colors.grey};
border-radius: 5px;
    .modal-code {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.low_emphasis}
    }
    .modal-check {
        margin-right: 1rem;
        color: ${Colors.primary};
        font-size: 0.9rem;
        font-weight: 600;
    }
`;

const ModalCheck = () => {
    return (
        <StyledModalCheck>
            <span className="modal-code">Apply Coupon Code</span>
            <span className="modal-check">CHECK</span>
        </StyledModalCheck>
    )
}

export default ModalCheck