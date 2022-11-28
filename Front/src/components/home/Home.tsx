import Banner from './banner/Banner';
import Collections from './collections/Collections';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NewArrivals from './new_arrivals/New_Arrivals';
import Shop from './shop/Shop';
import Status from './status/Status';
import HomeMobile from './home_mobile/Home_Mobile';

const Home = () => {
    return (
		<>	
			<Header /> 
			<Status />	
			<Banner />
			<NewArrivals />
			<Collections />
			<Shop />
			<Footer />
			<HomeMobile />
		</>	                   
    )
}

export default Home