import Styled from "styled-components";
import Colors from "../../globalStyles/Colors";
import { icons, iconsMobile } from "../../globalStyles/Images";
import { Error404, PageCategory } from "../../routes/Routes";
import React, { useState } from "react";

const StyledFooter = Styled.section`
.footer-more {
    display: none;
}
.style-footer {
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
        .footer-container {
            display: flex;
        }
    }
    .division-footer {
        display: none;
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
}
@media(max-width: 800px){
    .footer-more {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 1rem;
        margin-bottom: 1rem;
        width: 92vw;
        p {
            font-size: 0.9rem;
            font-weight: 600;
            color: ${Colors.low_emphasis};
        }
    }
    .style-footer {
        flex-direction: column;
        padding-bottom: 2rem;
        .footer-lists {
            margin-top: 1rem;
            flex-direction: column;
            ul {
                margin-left: 1rem;
                margin-bottom: 1rem;
                font-size: 0.9rem;
                .footer-lists-shop {
                    margin-top: 0.5rem;
                }               
            }
            .footer-container {
                display: flex;
                flex-direction: column-reverse;
                .footer-policy{
                    margin: 2rem 1rem;
                    display: flex;
                    flex-wrap: wrap;
                    .footer-lists-shop { 
                        justify-content: center;
                        align-items: space-evenly;
                        margin-right: 0.5rem;
                        margin-top: 1.5rem;
                        line-height: 0.4rem;
                        :first-child {
                            margin-left: -2.5rem;
                        }                
                    }
                }
                .footer-about {
                    display: flex;
                    flex-wrap: wrap;
                    .footer-lists-shop { 
                        justify-content: center;
                        align-items: space-evenly;
                        margin-right: 0.5rem;
                        margin-top: 1.5rem;
                        line-height: 0.4rem;
                        :first-child {
                            margin-left: -2.5rem;
                        }                
                    }
                }
            }
        }
        .division-footer {
            display: flex;
            width: 100vw;
        }
        .footer-location {
            margin-top: 1rem;
            .footer-location-links {
                justify-content: flex-start;
            }
            .footer-address {
                margin-left: 1rem;
                display: flex;
                justify-content: flex-start;
                p {
                    margin-left: 0.3rem;
                }
            }
            p {
                margin-left: 1rem;
                font-size: 0.8rem;
            }
        }
    }
}
`;

const Footer = () => {
    const [showFooter, setShowFooter] = useState(true);
    let showOrDisappear = () => {
        if(!showFooter){
            setShowFooter(true)
        } else {
            setShowFooter(false)
        }; 
    }  

    return (
        <>
            <StyledFooter>
                <div className="footer-more">
                    <p>More about CORA'L</p>
                    <img onClick={showOrDisappear} src={iconsMobile.Arrow_down} alt="seta para baixo" />
                </div>                
                { showFooter ?             
                <section className="style-footer">
                    <div className="footer-lists">
                        <ul className="footer-category">Shop by category
                            <li className="footer-lists-shop" onClick={() => Error404()}>Skincare</li>
                            <li className="footer-lists-shop" onClick={() => Error404()}>Personal Care</li>                    
                            <li className="footer-lists-shop" onClick={() => PageCategory()}>Handbags</li>
                            <li className="footer-lists-shop" onClick={() => Error404()}>Apparels</li>
                            <li className="footer-lists-shop" onClick={() => Error404()}>Watches</li>
                            <li className="footer-lists-shop" onClick={() => Error404()}>Eye Wear</li>
                            <li className="footer-lists-shop" onClick={() => Error404()}>Jewellery</li>
                        </ul>
                        <div className="footer-container">
                            <ul className="footer-about">About
                                <li className="footer-lists-shop" onClick={() => Error404()}>Contact Us</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>About Us</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>Careers</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>Press</li>
                            </ul>
                            <ul className="footer-policy">Policy
                                <li className="footer-lists-shop" onClick={() => Error404()}>Return Policy</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>Terms of Use</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>Sitemap</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>Security</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>Privacy</li>
                                <li className="footer-lists-shop" onClick={() => Error404()}>EPR Compliance</li>
                            </ul> 
                        </div>               
                    </div>
                    <hr className="division-footer"/>
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
                </section>
                : false}
            </StyledFooter>            
        </>
        
    )
}

export default Footer


