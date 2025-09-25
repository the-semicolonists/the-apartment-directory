import { Component } from 'react';

class LeaseAgreementContent extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="ltn__about-us-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h1 className="section-title">
                    Lease Arrangement Ensures Current of Information
                  </h1>
                  <p>
                    Because it is essential that the information in your hands
                    be as current as possible, we have devised a lease
                    arrangement that permits you to have each new volume of the
                    Directory, with supplements, on an annual lease basis. You
                    turn in your old volume, and we replace it with a completely
                    new and revised volume. Your lease is your guarantee that
                    you will always have up-to-date apartment information at
                    your fingertips.
                  </p>
                  <p>
                    Start profiting from the kind of specific, detailed
                    information you need to operate efficiently. Take advantage
                    of the comprehensive research the publishers of The
                    Apartment Directory have done for you.
                  </p>
                  <p>
                    To order a current Directory for your area, simply call us
                    at{' '}
                    <strong>
                      <a href="tel:+13108320354"> (310) 832-0354 </a>
                    </strong>
                    or email us at{' '}
                    <a href="mailto:directory@theapartmentdirectories.com">
                      {' '}
                      directory@theapartmentdirectories.com
                    </a>
                    . After subscription, the new Directory and supplements to
                    date (if any) will be delivered to you immediately.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={publicUrl + 'assets/img/building-bg.webp'}
                alt="#"
                className="h-100 w-100"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaseAgreementContent;
