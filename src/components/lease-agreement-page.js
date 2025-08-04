import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import LeaseAgreementContent from './lease-agreement-content';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const LeaseAgreementPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Lease Agreement" />
      <LeaseAgreementContent />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LeaseAgreementPage;
