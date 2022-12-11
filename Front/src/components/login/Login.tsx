import Styled from 'styled-components';
import Colors from '../../globalStyles/Colors';
import { login } from '../../globalStyles/Images';
import LoginMessage from './login-message/Login-Message';

const StyledLogin = Styled.div`
background-color: ${Colors.login_bg};
height: 90vh;
-webkit-mask-image: linear-gradient(to top, transparent 1%, #ffffff 40%);
        mask-image: linear-gradient(to top, transparent 1%, #ffffff 40%);
@media(max-width: 800px){
    .img-login-1 {
        width: 96%; 
        margin-left: 1rem;
        filter: opacity(70%);
    }
    .img-login-2 {
        width: 100%; 
        margin: 1rem 0;
    }
    .img-login-3 {
        width: 96%; 
        margin-right: 1rem;
         -webkit-mask-image: linear-gradient(to top, transparent 1%, #ffffff 30%);
            mask-image: linear-gradient(to top, transparent 1%, #ffffff 30%);  
    }
}
`;

export default function Login () {
    return (
        <>
            <StyledLogin>
                <img className='img-login-1' src={login.Login_img_1} alt='imagens de acessorios' />
                <img className='img-login-2' src={login.Login_img_2} alt='imagens de acessorios' />
                <img className='img-login-3' src={login.Login_img_3} alt='imagens de acessorios' />
            </StyledLogin>
            <LoginMessage/>           
        </>
    )
}