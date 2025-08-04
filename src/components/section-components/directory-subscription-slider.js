import { Component } from 'react';
import { Link } from 'react-router-dom';
class DirectorySubscriptionSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                Directory Subscription
              </h6>
              <h5 className="section-title">
                Annual Subscription to <br />
                The Apartment Directories are as follows:
              </h5>
            </div>
          </div>
        </div>
        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-1.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Covering 8 units and over in the greater L.A. area, publishes
                  in Spring
                </h6>
                <h5>LOS ANGELES APARTMENT DIRECTORY</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$986.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-3.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Covering 5 units and over in the South Bay and south-eastern
                  portion of L.A. County, publishes in Summer
                </h6>
                <h5>SOUTH BAY AND SOUTHERN CITIES APARTMENT DIRECTORY</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$920.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-2.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Covering 5-7 units in the greater L.A. area, publishes in
                  Spring
                </h6>
                <h5>LOS ANGELES APARTMENT DIRECTORY-SMALL UNIT EDITION</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$986.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-4.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Covering 3 units and over in all of Orange County, publishes
                  in Fall)
                </h6>
                <h5>ORANGE COUNTY APARTMENT INDEX</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$952.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-5.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Covering 4 units and over in all of San Diego County,
                  publishes in Summer
                </h6>
                <h5>SAN DIEGO COUNTY APARTMENT DIRECTORY</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$928.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-6.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Coverage includes 3 units and over in both Riverside and San
                  Bernardino Counties, publishes in Spring
                </h6>
                <h5>INLAND EMPIRE APARTMENT DIRECTORY</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$916.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-7.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Coverage includes 5 units and over in the San Gabriel, San
                  Fernando Valley, Antelope Valley, and Santa Clarita Valley,
                  publication date is Fall
                </h6>
                <h5>VALLEY APARTMENT DIRECTORY</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$924.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-8.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  {' '}
                  Covers all of Ventura County and Santa Barbara County,
                  buildings with 3 or more units. Publishes in Spring{' '}
                </h6>
                <h5>VENTURA and SANTA BARBARA COUNTIES</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$930.00 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={publicUrl + 'assets/img/directory-slider/slider-9.jpg'}
                  alt="#"
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>
                  Coverage includes office buildings of 10,000 square feet and
                  more, shopping centers, hotels and motels, and industrial
                  buildings (light and heavy) of 20,000 square feet in all of
                  Los Angeles County
                </h6>
                <h5>LOS ANGELES COMMERCIAL BUILDING DIRECTORY:</h5>
                <div className="search-by-place-btn">
                  <Link to="#">$990.00 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DirectorySubscriptionSlider;
