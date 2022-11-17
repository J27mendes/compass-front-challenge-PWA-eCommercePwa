import Styled from "styled-components";
import Colors from "../Colors";
import { icons } from "../components/Images";

const StyledFooter = Styled.section`
    display: flex;
    justify-content: space-between;
    background-color: ${Colors.primary};
    padding-bottom: 4rem;
    .footer-lists {
        display: flex;
        margin-top: 2rem;
        font-family: "Inter";
        ul {
            margin-left: 4rem;
            color: ${Colors.grey};
            li {
                color: ${Colors.light_text};
                margin-top: 1rem;

            }
        }
    }
    .footer-location {
        margin-top: 2rem;
        margin-right: 4rem;
        .footer-location-links {
            display: flex;
            justify-content: flex-end;
            padding-bottom: 0.5rem;
            img {
                margin-left: 1rem;
            }
        }
        .footer-address {
            display: flex;
            margin-top: 1rem;
            margin-bottom: 1rem;
            justify-content: flex-end;
            align-items: center;
            font-family: "Inter";
            font-size: 0.9rem;
            img {
                margin-right: 0.5rem;
            }
            p {
                color: ${Colors.grey};
            }
        }
        p {
            font-family: "Inter";
            font-size: 0.9rem;
            color: ${Colors.light_text}
        }
        
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-lists">
                <ul>Shop by category
                    <li>Skincare</li>
                    <li>Personal Care</li>
                    <li>Handbags</li>
                    <li>Apparels</li>
                    <li>Watches</li>
                    <li>Eye Wear</li>
                    <li>Jewellery</li>
                </ul>
                <ul>About
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
                <ul>Policy
                    <li>Return Policy</li>
                    <li>Terms of Use</li>
                    <li>Sitemap</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>EPR Compliance</li>
                </ul>                
            </div>
            <div className="footer-location">
                <div className="footer-location-links">
                    <img src={icons.Facebook} alt="logo do facebook"/>
                    <img src={icons.Instagran} alt="logo do instagran"/>
                    <img src={icons.Twitter} alt="logo do twitter"/>
                    <img src={icons.Youtube} alt="logo do youtube"/>
                </div>
                <div className="footer-address">
                    <img src={icons.Location} alt="icone de localização"/>
                    <p>United States</p>
                </div>
                <p>© 2021 | Cora Leviene All Rights Reserved</p>
            </div>
        </StyledFooter>
        
    )
}

export default Footer