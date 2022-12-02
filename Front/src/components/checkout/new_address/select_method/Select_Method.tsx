import { useState } from "react";
import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";
import { checkout } from "../../../../globalStyles/Images";

const StyledSelectMethod = Styled.form`
    display: flex;
    margin-top: 2rem;
    .select-method {
        width: 25%;
        height: 25vh;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border: solid 2px ${Colors.grey};
        border-radius: 8px;
        margin-right: 1rem;
        input {
            width: 1rem;
            height: 1rem;
            margin: 0.5rem 0.5rem 0 0;
            justify-content: flex-end;
        }
        img {
            margin-top: 1rem;
            align-self: center;
        }
        p {
            align-self: center;
            margin-top: 1rem;
            font-weight: 600;
        }
    }
    .select-method-amazon {
        margin-right: 0rem;
    }
`;

export default function SelectMethod (){
    const [isSelectedUpi, setSelectedUpi] = useState(false);
    const [isSelectedCredit, setSelectedCredit] = useState(false);
    const [isSelectedApple, setSelectedApple] = useState(false);
    const [isSelectedAmazon, setSelectedAmazon] = useState(false);

    return (
        <StyledSelectMethod>
            <div className="select-method">
                <input type="radio" checked={isSelectedUpi} onClick={() => setSelectedUpi(!isSelectedUpi)} /> 
                <img src={checkout.Upi} alt="pagamento com upi"/>
                <p>UPI</p>
            </div>
            <div className="select-method">
                <input type="radio" checked={isSelectedCredit} onClick={() => setSelectedCredit(!isSelectedCredit)}/> 
                <img src={checkout.Credit_card} alt="pagamento com cartão de credito ou debito"/>
                <p>Credit/Debit Card</p>
            </div>
            <div className="select-method">
                <input type="radio" checked={isSelectedApple} onClick={() => setSelectedApple(!isSelectedApple)}/> 
                <img src={checkout.Pay} alt="pagamento com pay"/>
                <p>Apple Pay</p>
            </div>    
            <div className="select-method select-method-amazon">
                <input type="radio" checked={isSelectedAmazon} onClick={() => setSelectedAmazon(!isSelectedAmazon)}/> 
                <img src={checkout.Amazon} alt="pagamento com amazon"/>
                <p>Amazon Pay</p>
            </div>            
        </StyledSelectMethod>
    )
}