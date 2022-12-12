import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";

const StyledEnterCode = Styled.div`
     .signup-grey {
        background-color: ${Colors.grey};
        width: 100%;
        height: 5vh;
    }
    h1 {
        color: ${Colors.primary};
        font-size: 2.5rem;
        width: 80%;
        line-height: 3rem;
        font-weight: 700;
        margin: 4rem 0 1rem 2rem;
    }
    .signUp-info-message {
        width: 100%;
        color: ${Colors.dark};
        margin-left: 2rem; 
        line-height: 1.5rem;
    }
    .input-enter-code {
        display: flex;
        width: 80%;
        margin-left: 2rem;
        margin-top: 2rem;
        .enter-first-code {
            margin-right: 1rem;  
            border-style: none;          
            border-radius: 5px;
            background-color: ${Colors.grey};
            border: solid 1px ${Colors.grey};
            color: ${Colors.dark};
            text-align: center;
            font-size: 2rem;
            width: 20%;
            height: 6vh;
        }
        .enter-first-code::placeholder{  
            border-style: none;
            border: solid 1px ${Colors.grey};
            text-align: center;
            font-size: 2rem;
        }
        .enter-second-code {
            margin-right: 1rem;  
            border-style: none;          
            border-radius: 5px;
            background-color: ${Colors.grey};
            border: solid 1px ${Colors.grey};
            color: ${Colors.dark};
            text-align: center;
            font-size: 2rem;
            width: 20%;
            height: 6vh;
        }
        .enter-second-code::placeholder{  
            border-style: none;
            border: solid 1px ${Colors.grey};
            text-align: center;
            font-size: 2rem;
        }
        .enter-third-code {
            margin-right: 1rem;  
            border-style: none;          
            border-radius: 5px;
            background-color: ${Colors.grey};
            border: solid 1px ${Colors.grey};
            color: ${Colors.dark};
            text-align: center;
            font-size: 2rem;
            width: 20%;
            height: 6vh;
        }
        .enter-third-code::placeholder{  
            border-style: none;
            border: solid 1px ${Colors.grey};
            text-align: center;
            font-size: 2rem;
        }
        .enter-fourth-code {
            margin-right: 1rem;  
            border-style: none;          
            border-radius: 5px;
            background-color: ${Colors.grey};
            border: solid 1px ${Colors.grey};
            color: ${Colors.dark};
            text-align: center;
            font-size: 2rem;
            width: 20%;
            height: 6vh;
        }
        .enter-fourth-code::placeholder{  
            border-style: none;
            border: solid 1px ${Colors.grey};
            text-align: center;
            font-size: 2rem;
        }
    }
    .code-request {
        display: flex;
        margin-top: 2rem;
        margin-left: 2rem;
        .request-again {
            text-decoration: none;
            margin-left: 1rem;
            color: ${Colors.primary};
            font-weight: 600;
        }
    }
    .signup-next{ 
        background-color: ${Colors.primary};
        color: ${Colors.bright};
        font-size: 1rem;
        border: solid 1px ${Colors.primary};
        border-radius: 8px;
        padding: 1rem 0; 
        margin: 6rem 2rem 2rem 2rem;
        width: 85%;
        font-weight: 500;   
        font-size: 1.2rem; 
        cursor: pointer;    
    }
`;

export default function EnterCode(){
    const navigate = useNavigate()
    
    return(
        <StyledEnterCode>
            <div className='signup-grey'></div>
            <h1>Enter OTP</h1>
            <p className="signUp-info-message">A 4 digit code will be sent to this number.</p>
            <div className="input-enter-code">
                <InputMask className='enter-first-code' placeholder="*" mask='9'/>
                <InputMask className='enter-second-code' placeholder="*" mask='9' />
                <InputMask className='enter-third-code' placeholder="*" mask='9' />
                <InputMask className='enter-fourth-code' placeholder="*" mask='9' />
            </div>
            <div className='code-request'>
                <p>Didn't recieve ther code?</p><p onClick={() => {navigate('/signup')}} className="request-again">Request Again</p>
            </div>
            <button onClick={() => navigate('/enterCode')} className="signup-next">Verify & Create Account</button>         
        </StyledEnterCode>       
    )
}