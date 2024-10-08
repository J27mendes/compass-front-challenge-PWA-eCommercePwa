import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUpGrey from "../SignupGrey/SignupGrey";

const StyledEnterCode = Styled.div`
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
    const [values, setValues] = useState<any>({});
    const navigate = useNavigate();

    const handle = (target:any) => {
        const {name, value} = target
        setValues({
            ...values,
            [name]:value
        })
        
    }

    const redirect = () => {
        if(
            values.first === '1' && 
            values.second === '2' &&
            values.third === '3' &&
            values.fourth === '4'
        ) {navigate('/Profile')}
        else {
            alert('O código enviado está incorreto')
        }
    }
    
    return(
        <StyledEnterCode>
            <SignUpGrey />
            <h1>Enter OTP</h1>
            <p className="signUp-info-message">A 4 digit code will be sent to this number.</p>
            <div className="input-enter-code">
                <InputMask name="first" onChange={({target}) => handle(target)} className='enter-first-code' placeholder="*" mask='9'/>
                <InputMask name="second" onChange={({target}) => handle(target)} className='enter-second-code' placeholder="*" mask='9' />
                <InputMask name="third" onChange={({target}) => handle(target)} className='enter-third-code' placeholder="*" mask='9' />
                <InputMask name="fourth" onChange={({target}) => handle(target)} className='enter-fourth-code' placeholder="*" mask='9' />
            </div>
            <div className='code-request'>
                <p>Didn't recieve ther code?</p><p onClick={() => {navigate('/signup')}} className="request-again">Request Again</p>
            </div>
            <button onClick={() => redirect()} className="signup-next">Verify & Create Account</button>
                   
        </StyledEnterCode>       
    )
}