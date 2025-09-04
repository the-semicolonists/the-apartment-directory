import React, { useState } from 'react';

// Global components
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';

// Section components
import DirectorySubscriptionSlider from './section-components/directory-subscription-slider';
import ApartmentSubscriptionContent from './apartment-subscription-content';
import MailingSubscriptionContent from './mailing-subscription-content';
import CommercialSubscriptionContent from './commercial-subscription-content';
import CallToAction from './section-components/call-to-action';

const SubscriptionRatesPage = () => {
  const [activeTab, setActiveTab] = useState('apartment');

  const sectionProps = {
    contentColor: 'section-bg-1',
    listColor: 'bg-white',
    spacing: 'pt-5',
  };

  return (
    <>
      <Navbar />
      <PageHeader headertitle="Subscription Rates" />

      <main>
        <DirectorySubscriptionSlider />

        <div className="container pt-5">
          {/* Nav Tabs */}
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'apartment' ? 'active' : ''}`}
                onClick={() => setActiveTab('apartment')}
              >
                Apartment
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'mailing' ? 'active' : ''}`}
                onClick={() => setActiveTab('mailing')}
              >
                Mailing
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'commercial' ? 'active' : ''}`}
                onClick={() => setActiveTab('commercial')}
              >
                Commercial
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content pt-4">
            {activeTab === 'apartment' && (
              <div className="tab-pane fade show active">
                <ApartmentSubscriptionContent {...sectionProps} />
              </div>
            )}
            {activeTab === 'mailing' && (
              <div className="tab-pane fade show active">
                <MailingSubscriptionContent spacing={sectionProps.spacing} />
              </div>
            )}
            {activeTab === 'commercial' && (
              <div className="tab-pane fade show active">
                <CommercialSubscriptionContent {...sectionProps} />
              </div>
            )}
          </div>
        </div>
      </main>

      <CallToAction />
      <Footer />
    </>
  );
};

export default SubscriptionRatesPage;
