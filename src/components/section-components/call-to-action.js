import { Component } from 'react';
import { Link } from 'react-router-dom';

class CallToAction extends Component {
  render() {
    return (
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h2>Ready to Find Your Next Investment?</h2>
                  <p>
                    From Cozy Homes to Profitable Investments, We Make Finding
                    Your Property Simple.
                  </p>
                </div>
                <div className="btn-wrapper go-top">
                  <Link className="btn btn-effect-3 btn-white" to="/properties">
                    Explore Properties <i className="icon-next" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
