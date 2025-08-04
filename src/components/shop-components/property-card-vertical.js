import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCardVertical = ({
  image,
  badge,
  title,
  location,
  beds,
  baths,
  size,
  price,
  priceLabel,
  agentImage,
}) => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
      <div className="product-img go-top">
        <Link to="/property-details">
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="product-info">
        <div className="product-badge-price">
          <div className="product-badge">
            <ul>
              <li>{badge}</li>
            </ul>
          </div>
          <div className="product-price">
            <span>
              {price}
              <label>{priceLabel}</label>
            </span>
          </div>
        </div>
        <h2 className="product-title go-top">
          <Link to="/property-details">{title}</Link>
        </h2>
        <div className="product-img-location go-top">
          <ul>
            <li>
              <Link to="/contact">
                <i className="flaticon-pin" /> {location}
              </Link>
            </li>
          </ul>
        </div>
        <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
          <li>
            <span>{beds} </span>Bed
          </li>
          <li>
            <span>{baths} </span>Bath
          </li>
          <li>
            <span>{size} </span>Square Ft
          </li>
        </ul>
      </div>
      <div className="product-info-bottom">
        <div className="real-estate-agent">
          <div className="agent-img">
            <Link to="/shop">
              <img
                src={agentImage || publicUrl + 'assets/img/blog/author.jpg'}
                alt="Agent"
              />
            </Link>
          </div>
          <div className="agent-brief">
            <h6>
              <Link to="/team-details">William Seklo</Link>
            </h6>
            <small>Estate Agents</small>
          </div>
        </div>
        <div className="product-hover-action">
          <ul>
            <li>
              <a
                href="#"
                title="Quick View"
                data-bs-toggle="modal"
                data-bs-target="#quick_view_modal"
              >
                <i className="flaticon-expand" />
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Wishlist"
                data-bs-toggle="modal"
                data-bs-target="#liton_wishlist_modal"
              >
                <i className="flaticon-heart-1" />
              </a>
            </li>
            <li className="go-top">
              <Link to="/property-details" title="Product Details">
                <i className="flaticon-add" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardVertical;
