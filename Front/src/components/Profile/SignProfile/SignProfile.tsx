import Styled from 'styled-components';
import Colors from '../../../globalStyles/Colors';

const StyledSignProfile = Styled.div`
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${Colors.primary};
    
`

const SignProfile = (props:any) => {
    return (
        <StyledSignProfile>{props.text}</StyledSignProfile>  
    )
} 
export default SignProfile
