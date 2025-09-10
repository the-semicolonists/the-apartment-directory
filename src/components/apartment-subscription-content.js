import React from 'react';

const subscriptionDetails = [
  'Access thousands of records, with options to filter by units, building location, zip code, and other special selections. Minimum orders are flexible depending on your subscription level.',
  'Single-user subscriptions provide full access to an entire directory, ideal for individual agents or companies.',
  'Firms with multiple users can select plans tailored for 2 to 5 users, ensuring everyone has access to the most up-to-date data.',
  'Subscribers can renew or receive updated data as it is published, keeping your records current throughout the year.',
  'Sample data is available by email, so you can confirm compatibility with your systems before committing. Please note that support or software is not included with the sample.',
  'Data usage rights are valid for one year from the date of receipt and must be renewed or returned at the end of the term.',
  'Subscription details and availability are subject to change, so we recommend contacting us for the latest options.',
  'Organizations with more than 5 users should call for custom subscription solutions.',
  'Special pricing and benefits are available to current subscribers of our printed directories.',
];

const ApartmentSubscriptionContent = ({
  contentColor = '',
  listColor = '',
  spacing = '',
}) => {
  return (
    <div className={`ltn__shop-details-area pb-10 ${contentColor}`}>
      <div className={`container ${spacing}`}>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                Apartment Data Subscription
              </h6>
            </div>

            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <h4 className="title-2">Available Data</h4>
              <div className="list-item-with-icon-2 ms-4">
                <ul>
                  <li>Owner’s name & address</li>
                  <li>Owner’s telephone number</li>
                  <li>Building APN number</li>
                  <li>Building address and zip code</li>
                  <li>Number of units in the building</li>
                  <li>Construction year of the building</li>
                  <li>Purchase or recording date</li>
                </ul>
              </div>

              <h4 className="title-2">Subscription Information</h4>
              <p>
                Our Apartment Directory subscription provides access to complete
                and regularly updated data. Subscribers can choose plans based
                on the number of users or the extent of the data required.
              </p>

              <div
                className={`property-detail-info-list ${listColor} rounded clearfix mb-60`}
              >
                {subscriptionDetails.map((text, idx) => (
                  <div
                    key={`subscription-${idx}`}
                    className="d-flex flex-row justify-content-start align-items-center"
                  >
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentSubscriptionContent;
