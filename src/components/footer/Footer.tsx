import Styled from "styled-components";
import Colors from "../../globalStyles/Colors";
import { icons } from "../../globalStyles/Images";
import { Error404 } from "../../routes/Routes";

const StyledFooter = Styled.section`
    display: flex;
    justify-content: space-between;
    background-color: ${Colors.primary};
    padding-bottom: 4rem;
    .footer-lists {
        display: flex;
        margin-top: 2rem;
        ul {
            margin-left: 4rem;
            color: ${Colors.grey};
            .footer-lists-shop {
                color: ${Colors.light_text};
                margin-top: 1rem;
                cursor: pointer;
                text-decoration: none;                
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
                cursor: pointer;
            }
        }
        .footer-address {
            display: flex;
            margin-top: 1rem;
            margin-bottom: 1rem;
            justify-content: flex-end;
            align-items: center;
            font-size: 0.9rem;
            img {
                margin-right: 0.5rem;
                cursor: pointer;
            }
            p {
                color: ${Colors.grey};
            }
        }
        p {
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
                    <li className="footer-lists-shop" onClick={() => Error404()}>Skincare</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Personal Care</li>
                    <a href="/category" className="footer-lists-shop">
                        <li className="footer-lists-shop">Handbags</li></a>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Apparels</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Watches</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Eye Wear</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Jewellery</li>
                </ul>
                <ul>About
                    <li className="footer-lists-shop" onClick={() => Error404()}>Contact Us</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>About Us</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Careers</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Press</li>
                </ul>
                <ul>Policy
                    <li className="footer-lists-shop" onClick={() => Error404()}>Return Policy</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Terms of Use</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Sitemap</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Security</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>Privacy</li>
                    <li className="footer-lists-shop" onClick={() => Error404()}>EPR Compliance</li>
                </ul>                
            </div>
            <div className="footer-location">
                <div className="footer-location-links">
                    <img onClick={() => Error404()} src={icons.Facebook} alt="logo do facebook"/>
                    <img onClick={() => Error404()} src={icons.Instagran} alt="logo do instagran"/>
                    <img onClick={() => Error404()} src={icons.Twitter} alt="logo do twitter"/>
                    <img onClick={() => Error404()} src={icons.Youtube} alt="logo do youtube"/>
                </div>
                <div className="footer-address">
                    <img onClick={() => Error404()} src={icons.Location} alt="icone de localização"/>
                    <p>United States</p>
                </div>
                <p>© 2021 | Cora Leviene All Rights Reserved</p>
            </div>
        </StyledFooter>
        
    )
}

export default Footer