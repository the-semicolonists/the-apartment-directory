import React from 'react';
import { Link } from 'react-router-dom';

const DirectorySubscriptionSlider = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  const directories = [
    {
      image: 'slider-1.webp',
      description:
        'Covering 8 units and over in the greater L.A. area, publishes in Spring',
      title: 'LOS ANGELES APARTMENT DIRECTORY',
      price: '$986.00',
    },
    {
      image: 'slider-3.jpg',
      description:
        'Covering 5 units and over in the South Bay and south-eastern portion of L.A. County, publishes in Summer',
      title: 'SOUTH BAY AND SOUTHERN CITIES APARTMENT DIRECTORY',
      price: '$920.00',
    },
    {
      image: 'slider-2.jpg',
      description:
        'Covering 5-7 units in the greater L.A. area, publishes in Spring',
      title: 'LOS ANGELES APARTMENT DIRECTORY-SMALL UNIT EDITION',
      price: '$986.00',
    },
    {
      image: 'slider-4.webp',
      description:
        'Covering 3 units and over in all of Orange County, publishes in Fall)',
      title: 'ORANGE COUNTY APARTMENT INDEX',
      price: '$952.00',
    },
    {
      image: 'slider-5.webp',
      description:
        'Covering mid-rise and high-rise apartment exteriors in all of San Diego County, publishes in Summer',
      title: 'SAN DIEGO COUNTY APARTMENT DIRECTORY',
      price: '$928.00',
    },
    {
      image: 'slider-6.webp',
      description:
        'Coverage includes 3 units and over in both Riverside and San Bernardino Counties, publishes in Spring',
      title: 'INLAND EMPIRE APARTMENT DIRECTORY',
      price: '$916.00',
    },
    {
      image: 'slider-7.jpg',
      description:
        'Coverage includes 5 units and over in the San Gabriel, San Fernando Valley, Antelope Valley, and Santa Clarita Valley, publication date is Fall',
      title: 'VALLEY APARTMENT DIRECTORY',
      price: '$924.00',
    },
    {
      image: 'slider-8.webp',
      description:
        'Covers all of Ventura County and Santa Barbara County, buildings with 3 or more units. Publishes in Spring',
      title: 'VENTURA and SANTA BARBARA COUNTIES',
      price: '$930.00',
    },
    {
      image: 'slider-9.jpg',
      description:
        'Coverage includes office buildings of 10,000 square feet and more, shopping centers, hotels and motels, and industrial buildings (light and heavy) of 20,000 square feet in all of Los Angeles County',
      title: 'LOS ANGELES COMMERCIAL BUILDING DIRECTORY:',
      price: '$990.00',
    },
  ];

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
        {directories.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <img
                  src={`${publicUrl}assets/img/directory-slider/${item.image}`}
                  alt={item.title}
                  className="slider-image"
                />
              </div>
              <div className="search-by-place-info">
                <h6>{item.description}</h6>
                <h5>{item.title}</h5>
                <div className="search-by-place-btn">
                  <Link to="/contact">Inquire</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorySubscriptionSlider;
