import Styled from "styled-components";

const StyledMenu = Styled.header`
    display: flex;
    border: red solid 1px;
`;

const Header = () => {
  return (
    <StyledMenu>
      <div>
        <img src="./src/assets/home_web/header/logo.svg" alt="logo Cora'l" />
        <ul>
          <li>Handbags</li>
          <li>Watches</li>
          <li>Skincare</li>
          <li>Jewellery</li>
          <li>Apperels</li>
        </ul>
      </div>
      <div>
        <img alt=""/>
        <input placeholder="Search for products or brands....." />
        <img alt=""/>
        <img alt=""/>
        <img alt=""/>
      </div>
    </StyledMenu>
  );
};

export default Header;
