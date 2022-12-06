import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import Colors from "../../globalStyles/Colors";
import { icons, iconsMobile } from "../../globalStyles/Images";
import { Error404 } from "../../routes/Routes";
import HeaderSearch from "./header_search/Header_Search";

const StyledMenu = Styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: ${Colors.bright};
  justify-content: space-between; 
  width: 100%
  height: 8vh;
  padding: 1rem 4rem 1rem 2rem;
  z-index: 200;
  .menu-header {
    display: flex; 
    align-items: center;
  }
  .menu-products {
    display: flex;    
    margin-left: 1rem;
    color: ${Colors.dark};
  }
  .menu-list {
    text-decoration: none;
    margin-left: 1rem;
    font-weight: 500;
    cursor: pointer;
    color: ${Colors.dark};

  }
  .menu-input {
    display: flex;
    align-items: center;
    margin-left: 11rem;
    width: 520px; 
    justify-content: space-around;
  }
  .header-mobile {
    display: none; 
  }

  @media(max-width: 800px){
    position: relative;
    display: flex; 
    width: 92vw;
    padding-left: 1rem;
    padding-right: 0rem;
    .header-mobile {
      width: 92vw;
      display: flex; 
      justify-content: space-between;
      margin-right: 1rem;
      .header-home-mobile {
        display: flex;
        align-items: center;
        img {
          margin-right: 1rem;
        }
        .mobile-home {
          font-weight: 600;
          color: ${Colors.primary};
        }
      }
      .header-icons-mobile {
        margin-left: 2rem;
        margin-right: 1rem;
        width: 120px;
        display: flex;
        justify-content: space-between;
      }
  }
    .menu-header {
      display: none;
    }
    .menu-input {
      display: none;    
    }
  }
`;

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <StyledMenu>
      <div className="menu-header">
        <img className="menu-header-logo" src={icons.Logo} alt="logo Cora'l" />
        <ul className="menu-products">
          <li onClick={() => {navigate('/category')}} className="menu-list">Handbags</li>
          <li className="menu-list" onClick={() => Error404()}>Watches</li>
          <li className="menu-list" onClick={() => Error404()}>Skincare</li>
          <li className="menu-list" onClick={() => Error404()}>Jewellery</li>
          <li className="menu-list" onClick={() => Error404()}>Apperels</li>
        </ul>
      </div>
      <div className="menu-input">
        <HeaderSearch search={search} setSearch={setSearch} />
        <img className="menu-header-icons" src={icons.Like} alt="Icone de coração"/>
        <img className="menu-header-icons" onClick={() => Error404()} src={icons.User} alt="Icone de busto"/>
        <img className="menu-header-icons" src={icons.Bag} alt="Icone de bolsa"/>
      </div>
      <div className="header-mobile">
        <div className="header-home-mobile">
          <img src={iconsMobile.Menu} alt=" três listras na horizontal - Home" />
          <p className="mobile-home">Home</p>
        </div>
        <div className="header-icons-mobile">
          <img src={iconsMobile.Add_to} alt="icone mais - para adicionar "/>
          <img src={iconsMobile.Search_mobile} alt="icone de lupa - busca"/>
          <img src={iconsMobile.Notification} alt="icone de sino - notificação"/>
        </div>
      </div>
    </StyledMenu>
  );
};

export default Header;
