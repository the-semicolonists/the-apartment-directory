import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ApartmentSubscriptionContent from './apartment-subscription-content';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const ApartmentSubscriptionPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="Subscription Rates"
        subheader="Apartment Disk Subscription"
      />
      <ApartmentSubscriptionContent
        contentColor="bg-white"
        listColor="section-bg-1"
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ApartmentSubscriptionPage;
