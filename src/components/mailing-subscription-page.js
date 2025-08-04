import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import MailingSubscriptionContent from './mailing-subscription-content';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const MailingSubscriptionPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="Subscription Rates"
        subheader="Mailing Label/List Subscription"
      />
      <MailingSubscriptionContent />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default MailingSubscriptionPage;
