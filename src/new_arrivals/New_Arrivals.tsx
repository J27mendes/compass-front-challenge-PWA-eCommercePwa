import Styled from "styled-components";
import Colors from "../Colors";
import { icons } from "../components/Images";
import ArrivalsCard from "./arrivals_card/Arrivals_Card";

const StyledNewArrivals = Styled.div`
    margin-top: 4rem;
    .arrivals {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-size: 2.2rem;
            font-weight: 600;
            color: ${Colors.dark};
            margin-left: 2rem;
        }
        .arrivals-view {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            p {                
                font-size: 0.9rem;
                margin-right: 1rem;
                color: ${Colors.primary};
                font-weight: 600;
            }
            img {
                margin-right: 5rem;
            }
        }
    }
`

const NewArrivals = () => {
    return (
        <>
        <StyledNewArrivals>
            <div className="arrivals">
                <h2>New Arrivals</h2>
                <div className="arrivals-view">
                   <p>View All</p> 
                   <img src={icons.Cut_arrow} alt="icone de maior Q"/>
                </div>
            </div>            
        </StyledNewArrivals>
        <ArrivalsCard />  
        </>     
    )
}
export default NewArrivals