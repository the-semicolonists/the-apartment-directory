import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import AboutUs from './section-components/about-us';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
