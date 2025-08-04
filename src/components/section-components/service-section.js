import { Component } from 'react';
import { Link } from 'react-router-dom';

class ServiceSection extends Component {
  render() {
    return (
      <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">Our Core Services</h1>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="#">Explore up-to-date listings</Link>
                  </h3>
                  <p>
                    Stay ahead with frequently updated apartment listings
                    curated for accuracy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-official-documents" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="#">Access direct contact info</Link>
                  </h3>
                  <p>
                    Get real owner and manager phone numbers for faster, more
                    personal outreach.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-operator" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="#">Save time with human-researched data</Link>
                  </h3>
                  <p>
                    We go beyond databases — our team manually verifies and
                    enriches every record.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-1" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/contact">Search with Confidence</Link>
                  </h3>
                  <p>
                    Our platform is built to help you discover your next home
                    with ease and trust.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-key" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/contact">Find Ideal Apartment</Link>
                  </h3>
                  <p>
                    Access wide range of verified properties that match your
                    needs and budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-mortgage" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/contact">Quality Properties Only</Link>
                  </h3>
                  <p>
                    We feature only well-maintained apartments from trusted
                    landlords and owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceSection;
