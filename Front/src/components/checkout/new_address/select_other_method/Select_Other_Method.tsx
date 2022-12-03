import { useState } from 'react';
import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";
import { checkout } from "../../../../globalStyles/Images";

const StyledSelectOtherMethod = Styled.div`
margin-top: 4rem;
border: solid 1px ${Colors.primary_tinty};
border-radius: 8px;
.other-method-upi {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    .upi-container {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        margin-top: 1rem;
        .upi-googlepay{
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
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
        input {
            width: 300px;
            height: 6vh;
            border: solid 1px ${Colors.primary_tinty};
            border-radius: 5px;
            padding-left: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
        }
        input::placeholder {
            color: ${Colors.low_emphasis};
            font-weight: 500;
        } 
        label {
            margin-top: 1rem;
            font-size: 0.8rem;
            color: ${Colors.low_emphasis};
        }
        .label-check {
            height: 4vh;
            display: flex;
            align-items: center;
            font-weight: 600;
            color: ${Colors.low_emphasis};
            .check-upi {
                margin-left: 0;
                margin-right: 0.5rem;
                width: 1rem;
                height: 1rem;
            }
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
.other-method-upi:hover {
    background-color: ${Colors.light_blue};
}

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

.other-method-paytm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .paytm-container{
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
.other-method-paytm:hover {
    background-color: ${Colors.light_blue};
}
`;
export default function SelectOtherMethod (){
    const [isGoogleUpi, setGoogleUpi] = useState(false);
    const [isPhonePe, setPhonePe] = useState(false);
    const [isPaytm, setPaytm] = useState(false);
    const [isCheck, setCheck] = useState(false);

    return (
        <StyledSelectOtherMethod>
            <div className="other-method-upi">
                <div className="upi-container">
                    <div className="upi-googlepay">
                        <img src={checkout.Google_pay} alt="pagamento upi google" />
                        <p>Google Pay</p>
                    </div>
                    <input placeholder="Enter your UPI Id"/>
                    <label>Eg: 1234567890@bi</label>
                    <label className="label-check">
                        <input className="check-upi" type="checkbox" checked={isCheck} onClick={() => setCheck(!isCheck)} />
                    Save this for fucture transactions
                    </label>
                </div>
                <div className="input-other">
                    <input type="radio" checked={isGoogleUpi} onClick={() => setGoogleUpi(!isGoogleUpi)}/>
                </div>
            </div>
            <div className="other-method-phonepe">
                <div className="phonepe-container">
                    <img src={checkout.PhonePe} alt="pagamento phone pe" />
                    <p>Phone Pe</p>
                </div>
                <div className="input-other">
                    <input type="radio" checked={isPhonePe} onClick={() => setPhonePe(!isPhonePe)} />
                </div>                
            </div>
            <div className="other-method-paytm">
                <div className="paytm-container">
                    <img src={checkout.Paytm} alt="pagamento com paytm" />
                    <p>Paytm</p>
                </div>
                <div className="input-other">
                    <input type="radio" checked={isPaytm} onClick={() => setPaytm(!isPaytm)} />
                </div>                
            </div>
        </StyledSelectOtherMethod>
    )
}