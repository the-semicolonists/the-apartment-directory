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
                    <strong>The Apartment Directory</strong> is a
                    research-driven platform designed specifically to help
                    professionals market to{' '}
                    <strong>verified apartment building owners</strong> across
                    Southern California.
                  </p>

                  <p>
                    With <strong>over 35 years of experience</strong> collecting
                    and refining apartment ownership records, our team delivers
                    the{' '}
                    <strong>
                      most accurate and comprehensive ownership data
                    </strong>{' '}
                    available today.
                  </p>

                  <p>
                    What sets us apart is the quality of our{' '}
                    <strong>human-verified contact information</strong>. Our
                    directories include phone numbers for 65% to 80% of listed
                    owners — far exceeding standard data sources. We also go
                    beyond public LLCs or partnership names to identify and
                    include <strong>actual decision-makers</strong> whenever
                    possible.
                  </p>

                  <p>
                    Unlike consumer-facing or tenant-oriented platforms, our
                    service is built exclusively for{' '}
                    <strong>agents, brokers, and deal teams</strong> focused on{' '}
                    <strong>multifamily properties</strong>. Through manual
                    research and validation, we surface ownership data that
                    other platforms often miss.
                  </p>

                  <p className="mb-5">
                    We welcome your feedback and invite you to explore our
                    offerings. Contact us directly with questions, or to learn
                    how we can support your outreach and deal flow.
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
