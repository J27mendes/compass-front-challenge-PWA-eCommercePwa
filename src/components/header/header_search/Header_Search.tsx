import React from "react";
import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { icons } from "../../../globalStyles/Images";


const StyledHeaderSearch = Styled.div`
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
    @media(max-width: 800px){
        display: none;
    }

`;

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const HeaderSearch = ({search, setSearch}: Props) => {
    return (
        <StyledHeaderSearch>
          <img src={icons.Search} alt="Icone de Lupa"/>
          <input 
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search for products or brands....." />
        </StyledHeaderSearch>
    )
}
export default HeaderSearch