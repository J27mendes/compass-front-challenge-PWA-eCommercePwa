import Styled from "styled-components";
import Colors from "../Colors";

const StyledStatus = Styled.div`
    display flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    height: 8vh;
    background-color: ${Colors.grey}; 
    color: ${Colors.dark};
    .status {
        font-size: 1rem;
        a {
        color: ${Colors.primary_tinty};
        font-weight: 500;
        }
    }
   
`;
const Status = () => {
    return (
        <StyledStatus>
            <div className="status">We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <a href="www.google.com.br">here</a></div>
        </StyledStatus>
    );
  };

export default Status;