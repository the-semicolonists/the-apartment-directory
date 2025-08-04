import { Component } from 'react';

class ApartmentSubscriptionContent extends Component {
  render() {
    const { contentColor, listColor, spacing } = this.props;

    return (
      <div className={`ltn__shop-details-area pb-10 ${contentColor}`}>
        <div className={`container ${spacing}`}>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Apartment Disk Subscription
                </h6>
              </div>
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <h2>Description</h2>
                <p>
                  The Apartment Directory is available on disk to import
                  directly into your database. The data we license is formatted
                  as comma separated values, suitable for importing into
                  spreadsheets such as Lotus, Microsoft Excel, or for using as
                  merge data for Word Perfect or Microsoft Word.
                </p>
                <p>
                  This sheet outlines the data fields available on disk and our
                  pricing structure.
                </p>
                <h4 className="title-2">Available Data</h4>
                <div className="list-item-with-icon-2 ms-4">
                  <ul>
                    <li> Owner’s name & address </li>
                    <li> Owner’s telephone number </li>
                    <li> Building APN number </li>
                    <li> Building address and zip code </li>
                    <li> Number of units in building </li>
                    <li> Construction year of building </li>
                    <li> Purchase or recording date </li>
                  </ul>
                </div>
                <h4 className="title-2">Cost</h4>
                <p>
                  {' '}
                  The cost for subscribing to the Apartment Directory on disk is
                  as follows: (The term 'subscriber' refers to a company or
                  individual who maintains a current subscription to the printed
                  version of a particular directory.){' '}
                </p>
                <div
                  className={`property-detail-info-list ${listColor} rounded clearfix mb-60`}
                >
                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      $245 per thousand records, $295 per thousand for special
                      selections, i.e. by units, location of building, zip code.
                      The minimum order is $695, per directory area for
                      non-subscribers, or $350 for subscribers to the Apartment
                      Directory.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      The single user rate for an entire directory on disk is
                      $1,695.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      The rate for firms with 2 to 5 agents or users is $2,195.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Renewal, or updated disks are available to disk
                      subscribers as they are published for $695 (single user),
                      $995 (2 to 5 users).
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Sample data is available by email so that you may verify
                      that our data is compatible with your systems. Please be
                      aware that no support or software is provided.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Usage of Apartment Directory data on disk is for one year
                      from the date of receipt, and must be renewed or returned
                      at the end of term.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Prices are subject to change with or without notice.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Please call for pricing if your organization has more than
                      5 agents or users: (800) 766-5316.
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <i className="fas fa-long-arrow-alt-right pe-5 ps-5" />
                    <p className="pe-5 mt-4">
                      Special pricing is available to current subscribers of our
                      book version directories.
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

export default ApartmentSubscriptionContent;
