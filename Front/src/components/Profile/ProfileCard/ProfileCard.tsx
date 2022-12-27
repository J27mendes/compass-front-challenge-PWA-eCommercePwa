import Styled from 'styled-components';
import Colors from '../../../globalStyles/Colors';
import AvatarProfile from '../AvatarProfile/AvatarProfile';

const StyledProfileCard = Styled.div`
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 2.5rem;
    background: ${Colors.grey};
    border-radius: 15px;
    height: 16vh;
`;

const ProfileCard = () => {
    return (
        <StyledProfileCard>
            <AvatarProfile />
        </StyledProfileCard>
    )
}

export default ProfileCard