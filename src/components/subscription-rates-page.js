import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import DirectorySubscriptionSlider from './section-components/directory-subscription-slider';
import ApartmentSubscriptionContent from './apartment-subscription-content';
import CommercialSubscriptionContent from './commercial-subscription-content';
import MailingSubscriptionContent from './mailing-subscription-content';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const SubscriptionRatesPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Subscription Rates" />
      <DirectorySubscriptionSlider />
      <ApartmentSubscriptionContent
        contentColor="section-bg-1"
        listColor="bg-white"
        spacing="pt-5"
      />
      <MailingSubscriptionContent spacing="pt-5" />
      <CommercialSubscriptionContent
        contentColor="section-bg-1"
        listColor="bg-white"
        spacing="pt-5"
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default SubscriptionRatesPage;
