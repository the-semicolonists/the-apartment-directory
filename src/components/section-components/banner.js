import { Component } from 'react';
// import topViewVillaImage from '../../../public/assets/img/top-view-villa.jpg'
class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    console.log(process.env.PUBLIC_URL);
    return (
      <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          {/* ltn__slide-item */}
          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>
                        </h6>
                        <h1 className="slide-title">
                          <span className="d-block text-dark">
                            Verified owner data.
                          </span>
                          <span className="d-block text-dark">
                            Better outreach.
                          </span>
                          <span className="d-block text-dark">
                            More closings.
                          </span>
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Built for agents, brokers, and deal teams focused on
                            multifamily.
                          </p>
                        </div>
                        {/* <div className="btn-wrapper animated ">
												<Link to="/contact" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
											</div> */}
                      </div>
                    </div>
                    <div className="slide-item-img banner-image">
                      <img
                        src="/assets/img/business-people-meeting.jpg" // Corrected path
                        alt="villa's top view"
                        className="w-100 ms-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal ltn__slide-item-3">
            <div className="ltn__slide-item-inner  text-right text-end">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>
                        </h6>
                        <h1 className="slide-title animated ">
                          The Right Place <br />
                          of Finding Your Next Investment
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Our listings are curated with care, combining
                            frequent updates and expert verification to ensure
                            only the best make it through.
                          </p>
                        </div>
                        {/* <div className="btn-wrapper animated">
												<Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
												<Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
											</div> */}
                      </div>
                    </div>
                    <div className="slide-item-img banner-image">
                      {/* <img
                        src={publicUrl + "/assets/img/top-view-villa.jpg"}
                        alt="villa's top view"
                        className="w-100 ms-0"
                      /> */}
                      <img
                        src="/assets/img/apartment-building-1.webp" // Corrected path
                        alt="villa's top view"
                        className="w-100 ms-0"
                      />
                    </div>
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

export default Banner;
