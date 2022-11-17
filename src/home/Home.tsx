import Banner from '../banner/Banner';
import Collections from '../collections/Collections';
import Header from '../header/Header';
import NewArrivals from '../new_arrivals/New_Arrivals';
import Status from '../status/Status';


const Home = () => {
    return (
		<>	
			<Header /> 
			<Status />	
			<Banner />
			<NewArrivals />
			<Collections />
		</>	                   
    )
}

export default Home