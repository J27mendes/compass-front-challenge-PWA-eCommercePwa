import Styled from 'styled-components';
import Colors from '../../../globalStyles/Colors';

const StyledSignUpGrey = Styled.div`
    background-color: ${Colors.grey};
    width: 100%;
    height: 5vh;   
`
const SignUpGrey = () => {
    return (
        <StyledSignUpGrey />
    )
}

export default SignUpGrey