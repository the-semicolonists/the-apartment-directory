import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import AboutUs from './section-components/about-us';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';
import { Helmet as Head } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Head>
        <title>Your Reliable Partner in Finding the Right Apartment</title>
        <meta
          name="description"
          content="Discover The Apartment Directory — the most complete and accurate source for apartment owner data, including direct contacts and verified phone numbers."
        />

        <meta
          property="og:title"
          content="Your Reliable Partner in Finding the Right Apartment"
        />
        <meta
          property="og:description"
          content="We specialize in apartment owner data with unmatched accuracy and verified phone numbers. Over 35 years of experience in the field."
        />
        <meta
          property="og:image"
          content="https://the-apartment-directory.vercel.app/assets/img/luxury-residential-building.jpg"
        />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Your Reliable Partner in Finding the Right Apartment"
        />
        <meta
          name="twitter:description"
          content="The Apartment Directory provides the most accurate owner data in the industry, backed by decades of human research and direct contacts."
        />
        <meta
          name="twitter:image"
          content="https://the-apartment-directory.vercel.app/assets/img/luxury-residential-building.jpg"
        />
      </Head>
      <Navbar />
      <Banner />
      <AboutUs />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
