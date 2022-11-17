import Banner from '../banner/Banner';
import Collections from '../collections/Collections';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NewArrivals from '../new_arrivals/New_Arrivals';
import Shop from '../shop/Shop';
import Status from '../status/Status';


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
		</>	                   
    )
}

export default Home