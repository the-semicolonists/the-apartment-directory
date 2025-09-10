import React from 'react';

const mailingDetails = [
  'Pressure Sensitive labels are available using the same selection criteria as above.',
  'Special selections can be added, such as by units, date of purchase, or location.',
  'Sorts requiring APN map plotting or multiple selections will need to be quoted separately.',
  'Data with mailing information only is available, with options for special selections (see separate price list for complete directories).',
  'Minimum order quantities apply for labels and data.',
  'Duplicate sets of labels ordered at the same time are available.',
  'Quantity discounts are available for large orders; please call for a custom quote.',
  'Computer generated readouts or lists with owner name, address, phone number, and building information are available per directory area.',
  'Shipping and handling will be added to all orders, with standard minimums.',
];

const MailingSubscriptionContent = ({ spacing = '' }) => {
  return (
    <div className="ltn__shop-details-area pb-10">
      <div className={`container ${spacing}`}>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                Mailing Label/List Subscription
              </h6>
            </div>

            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <h4 className="title-2">Available Data</h4>
              <p>
                The following outlines our available mailing labels, lists, and
                related data. Generally, labels and lists take 3 days to
                process. Delivery is typically via UPS within one business day.
              </p>

              <div className="property-detail-info-list rounded clearfix mb-60 section-bg-1">
                {mailingDetails.map((detail, idx) => (
                  <div
                    key={`mailing-${idx}`}
                    className="d-flex flex-row justify-content-start align-items-center"
                  >
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">{detail}</p>
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

export default MailingSubscriptionContent;
