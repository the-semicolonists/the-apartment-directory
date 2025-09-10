import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import CommercialSubscriptionContent from './commercial-subscription-content';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const CommercialSubscriptionPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="Subscription Rates"
        subheader="Commercial Data Subscription"
      />
      <CommercialSubscriptionContent
        contentColor="bg-white"
        listColor="section-bg-1"
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default CommercialSubscriptionPage;
