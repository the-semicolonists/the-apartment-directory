import { Component } from 'react';

class MailingSubscriptionContent extends Component {
  render() {
    const { spacing } = this.props;

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
                <h2>Description</h2>
                <p>
                  The following is the price list for labels, lists or mailing
                  list disks. Generally labels, lists, and disks take 3 days to
                  process. Lists are sent out UPS, which usually takes one day
                  to deliver.
                </p>
                <div className="property-detail-info-list rounded clearfix mb-60 section-bg-1">
                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Pressure Sensitive labels using same criteria as above,
                      are $75.00/m.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Add $20.00 per thousand for special selections, i.e. by
                      units, date of purchase, or location.{' '}
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Sorts requiring APN map plotting, or several selections
                      will have to be quoted separately.{' '}
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Disks with mailing information only, are $98.00/m, add
                      $20.00/m for special selections (see separate price list
                      for complete directories on disk).
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Minimum order for labels is $150.00, disks $195.00.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Duplicate sets of labels ordered at the same time are
                      $45.00/m.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Quantity discounts are available for orders of 5000 or
                      more labels, call for quote.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Computer generated readouts or lists that have the name,
                      address and phone number of the property owner, together
                      with the building information are $245.00/m records with a
                      minimum order of $495.00, per directory area.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Shipping and handling charges will be added to all orders,
                      minimum cost $15.00.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailingSubscriptionContent;
