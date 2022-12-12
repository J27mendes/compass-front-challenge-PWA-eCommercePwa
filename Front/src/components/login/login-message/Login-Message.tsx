import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";

const StyledLoginMessage = Styled.div`
margin-top: -8rem;
padding-bottom: 3rem;
.login-started {
    display: flex;
    flex-direction: column;  
    align-items: center;
    width: 100%;  
    .login-title {
        font-size: 2.1rem;
        margin-left: 1.2rem;
        color: ${Colors.black};
        font-weight: 700;        
        line-height: 3rem; 
        width: 90%;       
        filter: opacity(100%) saturate(100%);
        }
        .login-enter {
        background-color: ${Colors.primary};
        color: ${Colors.bright};
        font-size: 1rem;
        border: solid 1px ${Colors.primary};
        border-radius: 8px;
        padding: 1rem 0; 
        margin-top: 1.5rem;
        width: 90%;
        font-weight: 500;   
        font-size: 1.2rem; 
        cursor: pointer;    
        } 
        a {
        text-decoration: none;
        align-self: center;
        margin-top: 1rem;
        color: ${Colors.black};
        font-weight: 600;
        font-size: 1.2rem;
        } 
    }      
`;
export default function LoginMessage() {
    const navigate = useNavigate();

    return (
        <StyledLoginMessage>
            <div className='login-started'>
                <h2 className='login-title'>The shopping destination you need</h2>
                <button onClick={() => {navigate('/signup')}} className='login-enter'>Get Started</button>
                <a href="/error">I already have an account</a>
            </div>            
        </StyledLoginMessage> 
    )
}