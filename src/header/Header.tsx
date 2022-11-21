import Styled from "styled-components";
import Colors from "../Colors";
import { icons } from "../components/Images";
import { CategoryRoute, Error404 } from "../routes/Routes";

const StyledMenu = Styled.header`
  display: flex;
  justify-content: space-between; 
  width: 100%
  height: 8vh;
  padding: 1rem;
  margin-left: 1rem;  
  .menu-header {
    display: flex; 
    align-items: center;
  }
  .menu-products {
    display: flex;    
    margin-left: 1rem;
    color: ${Colors.dark}
  }
  li {
    margin-left: 1rem;
    font-weight: 500;
    cursor: pointer;

  }
  .menu-input {
    display: flex;
    align-items: center;
    width: 40%;
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
`;

const Header = () => {
  return (
    <StyledMenu>
      <div className="menu-header">
        <img src={icons.Logo} alt="logo Cora'l" />
        <ul className="menu-products">
          <li onClick={() => CategoryRoute()}>Handbags</li>
          <li onClick={() => Error404()}>Watches</li>
          <li onClick={() => Error404()}>Skincare</li>
          <li onClick={() => Error404()}>Jewellery</li>
          <li onClick={() => Error404()}>Apperels</li>
        </ul>
      </div>
      <div className="menu-input">
        <div className="menu-search">
          <img src={icons.Search} alt="Icone de Lupa"/>
          <input placeholder="Search for products or brands....." />
        </div>
        <img src={icons.Like} alt="Icone de coração"/>
        <img onClick={() => Error404()} src={icons.User} alt="Icone de busto"/>
        <img src={icons.Bag} alt="Icone de bolsa"/>
      </div>
    </StyledMenu>
  );
};

export default Header;
