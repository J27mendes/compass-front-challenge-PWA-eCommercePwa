import Styled from "styled-components";
import Colors from "../../../Colors";

const StyledMarking = Styled.div`
    margin-top: 3rem; 
    margin-bottom: 5rem;
    display: flex; 
    .page-marking {
        display: flex;
        align-items: center;
        width: 220px;
        background-color: ${Colors.grey};
        border-radius: 10px;
        padding: 0.2rem;
        font-size: 0.8rem;
        .marking {
            background-color: ${Colors.primary};
            color: ${Colors.bright};
            padding: 0.5rem 1.1rem;
            border-radius: 8px;
        }
        .no-marking {
            background-color: ${Colors.grey};
            color: ${Colors.low_emphasis};
            padding: 0.5rem 1.1rem;
            border-radius: 8px;
        }
    } 
    .card-pages-next {
        margin-left: 1rem;
        padding: 0.7rem 1.2rem;
        font-size: 0.8rem;
        background-color: ${Colors.grey};
        color: ${Colors.low_emphasis};
        border-radius: 10px;
        font-weight: 500;
    } 
`;

const Marking = () => {
    return (
        <StyledMarking>
            <div className="page-marking">
                <div className="marking">1</div>
                <div className="no-marking">2</div>
                <div className="no-marking">3</div>
                <div className="no-marking">4</div>
                <div className="no-marking">5</div>
            </div>
            <div className="card-pages-next">Next</div>
        </StyledMarking>        
    )
}
export default Marking