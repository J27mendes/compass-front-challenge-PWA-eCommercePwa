import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";
import MethodPaytm from './method_paytm/Method_Paytm';
import MethodPhonepe from './method_phonepe/Method_Phonepe';
import MethodUpi from './method_upi/Method_Upi';

const StyledSelectOtherMethod = Styled.div`
margin-top: 4rem;
border: solid 1px ${Colors.primary_tinty};
border-radius: 8px;
`;
export default function SelectOtherMethod (){

    return (
        <StyledSelectOtherMethod>
            <MethodUpi />            
            <MethodPhonepe />
            <MethodPaytm />
        </StyledSelectOtherMethod>
    )
}