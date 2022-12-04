import { useState} from 'react'
import Styled from "styled-components";
import { checkout } from "../../../../../globalStyles/Images";
import Colors from '../../../../../globalStyles/Colors';

const StyledMethodPhonepe = Styled.div`
.other-method-phonepe {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .phonepe-container{
        margin: 3rem 0 1rem 1rem;  
        display: flex;
        align-items: center;
        img {
            width: 45px;
            height: 45px;
            padding: 0.7rem;
            border: solid 1px ${Colors.low_emphasis};
            border-radius: 5px;
            background-color: ${Colors.bright};
        }
        p {
            margin-left: 0.5rem;
            font-weight: 600;
        }
    } 

    .input-other {
        margin-right: 2rem;
        input {
            width: 1rem;
            height: 1rem;
        }
    }
}
.other-method-phonepe:hover {
    background-color: ${Colors.light_blue};
}
.other-m-phone {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.light_blue};
    .phonepe-container{
        margin: 3rem 0 1rem 1rem;  
        display: flex;
        align-items: center;
        img {
            width: 45px;
            height: 45px;
            padding: 0.7rem;
            border: solid 1px ${Colors.low_emphasis};
            border-radius: 5px;
            background-color: ${Colors.bright};
        }
        p {
            margin-left: 0.5rem;
            font-weight: 600;
        }
    } 

    .input-other {
        margin-right: 2rem;
        input {
            width: 1rem;
            height: 1rem;
        }
    }
}
`;

export default function MethodPhonepe (){
    const [isPhonePe, setPhonePe] = useState(false);
    return (
        <StyledMethodPhonepe>
            <div className={!isPhonePe ? "other-method-phonepe" : 'other-m-phone'}>
                <div className="phonepe-container">
                    <img src={checkout.PhonePe} alt="pagamento phone pe" />
                    <p>Phone Pe</p>
                </div>
                <div className="input-other">
                    <input type="radio" checked={isPhonePe} onClick={() => setPhonePe(!isPhonePe)} />
                </div>                
            </div>
        </StyledMethodPhonepe>
    )
}