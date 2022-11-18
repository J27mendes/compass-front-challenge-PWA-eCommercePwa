import Styled from "styled-components";
import { icons } from "../../components/Images";
import Colors from "../../Colors";
import { CategoryRoute } from "../../routes/Routes";

const StyledButtonBanner = Styled.div`
    button {                
            height: 2.6rem;
            width: 180px;
            background-color: ${Colors.primary};
            border: solid 1px ${Colors.primary};
            border-radius: 8px;
            color: ${Colors.bright};
            font-size: 1rem;
            font-weight: 500;
            text-align: center; 
            position: relative;
            cursor: pointer;
            img {
                width: 1rem;
                float: left; 
                margin-left: 1rem;
                padding: 0.2rem;
            }         
        }     
`;

const ButtonBanner = () => {
    return (
        <StyledButtonBanner>
            <button onClick={() => CategoryRoute()} type="button"><img className="banner-arrow" src={icons.Arrow_transparent} alt="icone de flecha"/>See more</button>
        </StyledButtonBanner>
    )
}
export default ButtonBanner