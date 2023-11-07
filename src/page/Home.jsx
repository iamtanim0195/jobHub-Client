import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import ContactUs from "../components/Home/ContactUs";
import JobCategory from "../components/Home/JobCategory";

const Home = () => {
    return (<>
        <Banner />
        <JobCategory />
        <About />
        <ContactUs />
    </>);
}

export default Home
