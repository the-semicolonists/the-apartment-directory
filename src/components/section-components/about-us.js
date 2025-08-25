import { Component } from 'react';

class AboutUs extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img
                  src={
                    publicUrl + 'assets/img/luxury-residential-building.webp'
                  }
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h1 className="section-title">
                    The Go-To Data Source for Multifamily Investment in Southern California
                    <span className="ps-1">.</span>
                  </h1>
                  <p>
                    Access verified, regularly updated apartment owner data-including phone numbers for 65–80% of listings-curated for agents, brokers, and deal teams focused on multifamily.
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-1" />
                    Verified Owner Data
                  </li>
                  <li>
                    <i className="flaticon-mountain" />
                    Effortless Lead Generation
                  </li>
                  <li>
                    <i className="flaticon-heart" />
                    Trusted by Industry Professionals
                  </li>
                  <li>
                    <i className="flaticon-secure" />
                    Continuously Updated Listings
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                     
                    "The most comprehensive and actionable data on 
                    <br />
                    apartment buildings and ownership in Southern California."
                  </p>
                </div>
                {/* <div className="btn-wrapper animated go-top">
			            <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
			          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
