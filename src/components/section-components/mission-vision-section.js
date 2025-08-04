import { Component } from 'react';

class MissionVisionSection extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="ltn__about-us-area pb-115 go-top mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h6 className={'section-subtitle ltn__secondary-color'}>
                    Mission & Vision
                  </h6>
                  <h1 className="section-title">The Best You Can Find</h1>
                </div>
                <div className="about-us-info-wrap-inner about-us-info-devide--- me-4">
                  <p className="my-4">
                    At The Apartment Directory, our mission is to deliver the
                    most complete and accurate source of apartment owner data
                    available. With over 35 years of experience compiling
                    ownership records, we are committed to helping marketers and
                    businesses connect with property owners through verified,
                    human-researched data that goes beyond standard databases.
                  </p>

                  <p>
                    Our vision is to be the most trusted and valuable resource
                    for apartment ownership data. A platform where professionals
                    rely on real human research, direct contact access, and
                    regularly updated listings to drive their outreach and
                    marketing success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
                <img
                  src={
                    publicUrl +
                    'assets/img/modern-houses-with-green-plant-wall.jpg'
                  }
                  alt="sunset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionVisionSection;
