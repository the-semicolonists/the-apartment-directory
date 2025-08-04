import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import DirectorySubscriptionSlider from './section-components/directory-subscription-slider';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const DirectorySubscriptionPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="Subscription Rates"
        subheader="Directory Subscription"
      />
      <DirectorySubscriptionSlider />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default DirectorySubscriptionPage;
