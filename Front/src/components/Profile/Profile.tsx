import Styled from 'styled-components';
import HomeMobile from '../home/home_mobile/Home_Mobile';
import SignUpGrey from '../login/SignupGrey/SignupGrey';
import ProductWishlist from '../products/ProductsWishlist/ProductsWishlisr';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SignProfile from './SignProfile/SignProfile';

const StyledProfile = Styled.div`
   margin-left: 1.5rem;
`;

const Profile = () => {
    return (
        <>
            <SignUpGrey />
            <StyledProfile>
                <SignProfile text={'Profile'} />
                <ProfileCard />
                <ProfileInfo text={'Personal Information'} />
                <ProfileInfo text={'Refer and Earn'} />
                <ProfileInfo text={'My Orders'} />
                <ProfileInfo text={'My Wishlist'} />
                <ProfileInfo text={'My Reviews'} />
                <ProfileInfo text={'My Address Book'} />
                <ProfileInfo text={'My Saved Cards'} />
                <ProductWishlist text={'Logout'} />
            </StyledProfile>
            <HomeMobile />
        </>
    )
}

export default Profile