import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { icons } from "../../../globalStyles/Images";
import CardCategory from "../card_category/Card_Category";
import { useState, useEffect } from 'react'
import CategorySelect from "./category_select/Category_Select";

const StyledCategorySearch = Styled.section`
  width: 78%;
  margin-top: 5rem;
  margin-left: 2rem;
  .category-search {    
    margin-top: 0.5rem; 
    display: flex;
    justify-content: flex-start; 
    align-items: center;  
    img {
        width: 1.5rem;
        margin-right: 0.5rem;
    }
    .category-amount-items {
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.dark};
        margin-right: 6rem;
    } 
    .category-show {
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.dark};
        margin-left: 4rem;
    }
    .category-amount {
        margin-left: 0.5rem;
        margin-right: 4rem;
        background-color: ${Colors.grey};
        border-radius: 5px;
        text-align: center;
        padding: 1.2rem 1.4rem; 
    }
    .category-sort {
        margin-left: 2rem;
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.dark};
        margin-right: 0.5rem;
    }
}
  
 
`;

const CategorySearch = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
        .then((resp) => resp.json())
        .then((data) => setCategory(data))
        .catch((err) => console.log(err))
    },[])  

    return (
        <StyledCategorySearch>
            <div className="category-search"> 
                <img src={icons.Grid} alt="icone de tabela"/>
                <img src={icons.Grid_grey} alt="icone de lista na cor cinza" />
                <p className="category-amount-items">Showing 1 - 40 of 145 items</p>          
                <p className="category-show">To Show:</p>
                <div className="category-amount">9</div>
                <p className="category-sort">Sort By</p>
                <CategorySelect options={category} />
            </div>  
            <CardCategory infoCard={category}/>           
        </StyledCategorySearch> 
    )
}

export default CategorySearch