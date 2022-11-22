import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { icons } from "../../../globalStyles/Images";
import { Error404 } from "../../../routes/Routes";
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
                cursor: pointer;
            }
            img {
                margin-right: 5rem;
            }
        }
    }
    @media(max-width: 800px){
        margin-top: 2rem;
        .arrivals {
            display: flex;
            align-items: center;
            h2 {
            font-size: 1rem;
            margin-left: 1rem;
            }
            .arrivals-view {
                p {
                    font-size: 0.8rem;
                    margin-right: 0.5rem;
                }
                img {
                    width: 0.4rem;
                    margin-right: 2rem;
                }
            }
        }
       
    }
`;

const NewArrivals = () => {
    return (
        <>
        <StyledNewArrivals>
            <div className="arrivals">
                <h2>New Arrivals</h2>
                <div className="arrivals-view">
                   <p onClick={() => Error404()}>View All</p> 
                   <img src={icons.Cut_arrow} alt="icone de maior Q"/>
                </div>
            </div>            
        </StyledNewArrivals>
        <ArrivalsCard />  
        </>     
    )
}
export default NewArrivals