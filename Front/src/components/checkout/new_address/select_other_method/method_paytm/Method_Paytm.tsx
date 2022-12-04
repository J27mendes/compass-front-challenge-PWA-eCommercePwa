import { useState } from 'react'
import Styled from 'styled-components';
import { checkout } from '../../../../../globalStyles/Images';
import Colors from '../../../../../globalStyles/Colors';

const StyledMethodPaytm = Styled.div`
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
.other-m-pay {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.light_blue};
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

}
    
`

export default function MethodPaytm (){
    const [isPaytm, setPaytm] = useState(false);
    return(
        <StyledMethodPaytm>
            <div className={!isPaytm ? "other-method-paytm" : 'other-m-pay'}>
                <div className="paytm-container">
                    <img src={checkout.Paytm} alt="pagamento com paytm" />
                    <p>Paytm</p>
                </div>
                <div className="input-other">
                    <input type="radio" checked={isPaytm} onClick={() => setPaytm(!isPaytm)} />
                </div>                
            </div>
        </StyledMethodPaytm>
    )
}