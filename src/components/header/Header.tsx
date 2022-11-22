import Styled from "styled-components";
import Colors from "../../globalStyles/Colors";
import { icons, iconsMobile } from "../../globalStyles/Images";
import { Error404 } from "../../routes/Routes";

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
  .menu-search {
    display: flex;
    align-items: center;
    height: 7vh;
    background-color: ${Colors.grey};
    border-radius: 5px;
    img {
      padding-left: 1rem;
      cursor: pointer;
    }
    input{
      border: none;
      width: 320px;
      padding-left: 1rem;
      background-color: ${Colors.grey};
      font-weight: 500;
      font-size: 0.9rem;
      
    }
    input::placeholder {
      font-weight: 500;
      font-size: 0.9rem;
    }
    input:focus {
    outline: 0;
    }
  }
  .header-mobile {
    display: none; 
  }

  @media(max-width: 800px){
    display: flex; 
    width: 100%;
    padding-left: 1rem;
    .header-mobile {
      width: 100%;
      display: flex; 
      justify-content: space-between;
      margin-right: 2rem;
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
        margin-right: 2rem;
        width: 180px;
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
  return (
    <StyledMenu>
      <div className="menu-header">
        <img className="menu-header-logo" src={icons.Logo} alt="logo Cora'l" />
        <ul className="menu-products">
          <a href="/category" className="menu-list">Handbags</a>
          <li className="menu-list" onClick={() => Error404()}>Watches</li>
          <li className="menu-list" onClick={() => Error404()}>Skincare</li>
          <li className="menu-list" onClick={() => Error404()}>Jewellery</li>
          <li className="menu-list" onClick={() => Error404()}>Apperels</li>
        </ul>
      </div>
      <div className="menu-input">
        <div className="menu-search">
          <img src={icons.Search} alt="Icone de Lupa"/>
          <input placeholder="Search for products or brands....." />
        </div>
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
          <img src={iconsMobile.Search_mobile} alt="iconde de lupa - busca"/>
          <img src={iconsMobile.Notification} alt="icone de sino - notificação"/>
        </div>
      </div>
    </StyledMenu>
  );
};

export default Header;
