import Styled from 'styled-components';
import { MdKeyboardArrowRight } from "react-icons/md";
import Colors from '../../../globalStyles/Colors';

const StyledProfileInfo = Styled.div`
display: flex;
justify-content: space-between;
margin-right: 1.5rem;
margin-bottom: 2rem;
.pagina-perfil {
    color: ${Colors.dark};
    font-weight: 600;
}
`;

const ProfileInfo = (props:any) => {
    return (
        <StyledProfileInfo>
            <div className='pagina-perfil'>{props.text}</div>
            <MdKeyboardArrowRight size={30} />
        </StyledProfileInfo>
    )
}
export default ProfileInfo