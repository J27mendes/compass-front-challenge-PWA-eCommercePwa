import Styled from "styled-components";
import Colors from "../../Colors";
import { icons } from "../../components/Images";

const StyledCategorySearch = Styled.section`
  border: solid 1px red; 
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
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.dark};
        margin-right: 6rem;
    } 
    .category-show {
        font-family: "Inter";
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
        font-family: "Inter"; 
    }
    .category-sort {
        margin-left: 2rem;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.dark};
        margin-right: 0.5rem;
    }
    select {
        background-color: ${Colors.grey};
        border: none;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.low_emphasis};
        border-radius: 5px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        padding-right: 6rem;
        text-align: left;
    }
}
  
 
`;

const CategorySearch = () => {
    return (
        <StyledCategorySearch>
            <div className="category-search"> 
                <img src={icons.Grid} alt="icone de tabela"/>
                <img src={icons.Grid_grey} alt="icone de lista na cor cinza" />
                <p className="category-amount-items">Showing 1 - 40 of 145 items</p>          
                <p className="category-show">To Show:</p>
                <div className="category-amount">9</div>
                <p className="category-sort">Sort By</p>
                <select name="position">
                    <option value="">Position</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>            
        </StyledCategorySearch>        
    )
}

export default CategorySearch