import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { iconsMobile } from "../../../globalStyles/Images";

const StyledHomeMobile = Styled.div`
display: none;
    @media(max-width: 800px) {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: ${Colors.bright};
    height: 8vh;
    width: 92vw;
    .home-mobile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 25px;
            height: 25px;
        }
        p {
            margin-top: 0.2rem;
            font-size: 0.9rem;
            color: ${Colors.primary}
        }
    }
}
`

const HomeMobile = () => {
    return ( 
        <StyledHomeMobile>
            <div className="home-mobile">
                <img src={iconsMobile.Home_icon} alt="home" />
                <p>Home</p>
            </div>
            <div className="home-mobile">
                <img src={iconsMobile.Categories_icon} alt="categories" />
                <p>Categories</p>
            </div>
            <div className="home-mobile">
                <img src={iconsMobile.User_icon} alt="user" />
                <p>Products</p>
            </div>
            <div className="home-mobile">
                <img src={iconsMobile.Bag_icon} alt="bag" />
                <p>Bag</p>
            </div>
        </StyledHomeMobile>
        
    )
}
export default HomeMobile