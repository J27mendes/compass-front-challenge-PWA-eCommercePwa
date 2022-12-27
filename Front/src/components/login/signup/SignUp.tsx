import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import Colors from '../../../globalStyles/Colors';
import InputsMobile from '../../checkout/new_address/inputs_mobile/Inputs_Mobile';
import SignUpGrey from '../SignupGrey/SignupGrey';

const StyledSignUp = Styled.div`
    h1 {
        color: ${Colors.primary};
        font-size: 2.5rem;
        width: 80%;
        line-height: 3rem;
        font-weight: 700;
        margin: 4rem 0 2rem 2rem;
    }
    .input-mobile-container {
        margin: 2rem;
    }
    .signUp-info-message {
        width: 55%;
        color: ${Colors.dark};
        margin-left: 2rem; 
        line-height: 1.5rem;
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
export default function SignUp () {
    const navigate = useNavigate()
    return (
        <StyledSignUp>
            <SignUpGrey />
            <h1>Enter your phone number</h1>
            <div className='input-mobile-container'>
                <InputsMobile />
            </div>
            <p className="signUp-info-message">A 4 digit code will be sent to this number.</p>
            <button onClick={() => navigate('/enterCode')} className="signup-next">Next</button>
        </StyledSignUp>
    )
}