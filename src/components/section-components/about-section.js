import { Component } from 'react';

class AboutSection extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="ltn__about-us-area pb-115 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
                <img
                  src={
                    publicUrl +
                    'assets/img/beautiful-architecture-marseille-france-with-tall-business-buildings-white-sky.jpg'
                  }
                  alt="building"
                />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h1 className="section-title">
                    Your Reliable Partner in Finding the Right Apartment
                    <span className="ps-1">.</span>
                  </h1>
                </div>
                <div className="about-us-info-wrap-inner about-us-info-devide---">
                  <p>
                    The main purpose of this website is to outline our very
                    unique product for marketing to apartment building owners,
                    The Apartment Directory.
                  </p>

                  <p>
                    Our directories are the single best and most complete source
                    available for obtaining apartment owner data. With over 35
                    years experience in the compilation of apartment owner
                    records, we are quite sure our service can benefit you and
                    your company.
                  </p>

                  <p>
                    The main advantage of using our service is our phone numbers
                    of the owners. We have between 65% and 80% of the phone
                    numbers of the owners in our directories. Secondly, we have
                    more direct contact names associated with our ownership
                    data. In other words, if an apartment building is owned by a
                    company or partnership name, we search it out to get a name
                    of the general partners, so our customers have a contact
                    person. Also, since we concentrate on and do actual "human"
                    research, in addition to database searches, we have
                    buildings that other sources don't get.
                  </p>

                  <p className="mb-5">
                    Please review our website and call us if you need further
                    details, or would like to subscribe to any of our
                    directories. If you have any suggestions for the improvement
                    of our website, please let us know. We look forward to
                    hearing from you.
                  </p>

                  <p>
                    Thank you, <br /> Laurence A. Kurtz <br />
                    <strong>President</strong>
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

export default AboutSection;
