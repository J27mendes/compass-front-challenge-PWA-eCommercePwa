import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";
import { icons } from "../../../../globalStyles/Images";

const StyledModalReturn = Styled.div`
    display: flex;
        p {
            margin-left: 1rem;
            font-size: 1.2rem;
            font-weight: 600;
            color: ${Colors.primary}
        }
    }
`;

const ModalReturn = () => {
  return (
    <StyledModalReturn>
      <img src={icons.Arrow_full_left} alt="icone de seta para esquerda" />
      <p>Back</p>
    </StyledModalReturn>
  );
};

export default ModalReturn;
