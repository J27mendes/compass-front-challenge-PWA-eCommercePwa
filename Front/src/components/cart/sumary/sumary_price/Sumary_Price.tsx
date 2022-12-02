import Styled from "styled-components";
import Buttons from "../../buttons/Buttons";
import SumaryInfo from "./sumary_info/Sumary_Info";

const StyledSumaryPrice = Styled.div`
margin-top: 2rem;
`;

export default function SumaryPrice () {
    return (
        <>
            <StyledSumaryPrice>
                <SumaryInfo />
            </StyledSumaryPrice>
            <Buttons />
        </>
        
    )
}