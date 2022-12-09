import Styled from 'styled-components';
import Colors from '../../../../globalStyles/Colors';

const StyledCategorySelect = Styled.div`

select {
    background-color: ${Colors.grey};
    border: none;
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
`

export default function CategorySelect ({options}:any){
   return (
   <StyledCategorySelect>
    <select name="position">
        <option value="">Position</option>
        {options.map((option:any) => (
            <option value={option.id} key={option.id}>{option.arrivalsName}</option>
        ))}
     </select>   
    </StyledCategorySelect>
)
}