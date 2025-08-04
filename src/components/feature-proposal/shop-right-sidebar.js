import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './shop-sidebar';
import PropertyCardHorizontal from '../shop-components/property-card-horizontal';
import PropertyCardVertical from '../shop-components/property-card-vertical';

class ShopGridV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const properties = [
      {
        image:
          'https://images.crexi.com/assets/1922415/a2f4f9910cf84db9aab1f1f50f30fbc0_716x444.jpg',
        badge: 'For Rent',
        title: 'Spacious 2-Bedroom Apartment with City Views',
        location: 'Belmont Gardens, Chicago',
        beds: 2,
        baths: 2,
        size: 1450,
        price: '$2,500',
        priceLabel: '/Month',
        agentImage: 'assets/img/blog/author.jpg',
      },
      {
        image:
          'https://images.crexi.com/assets/1922415/330004320c824e1f9cfa282f64ec7995_716x444.jpg',
        badge: 'For Sale',
        title: 'Modern Duplex with Private Yard',
        location: 'East Austin, Texas',
        beds: 3,
        baths: 3,
        size: 1850,
        price: '$465,000',
        priceLabel: '',
        agentImage: 'assets/img/blog/author.jpg',
      },
      {
        image:
          'https://images.crexi.com/assets/1922415/e593533ab09f45ec8d930620e346b293_716x444.jpg',
        badge: 'For Rent',
        title: 'Renovated Loft Apartment in Historic Building',
        location: 'Downtown Brooklyn, New York',
        beds: 1,
        baths: 1,
        size: 900,
        price: '$3,200',
        priceLabel: '/Month',
        agentImage: 'assets/img/blog/author.jpg',
      },
      {
        image:
          'https://images.crexi.com/assets/1922415/45fd80d8051641dcab6e446ec1213c3d_716x444.jpg',
        badge: 'For Sale',
        title: 'Luxury Duplex with Rooftop Access',
        location: 'Silver Lake, Los Angeles',
        beds: 4,
        baths: 3,
        size: 2200,
        price: '$825,000',
        priceLabel: '',
        agentImage: 'assets/img/blog/author.jpg',
      },
    ];

    return (
      <div>
        <div className="ltn__product-area ltn__product-gutter">
          <div className="container">
            <div className="row">
              <div className="col-lg-8  mb-100">
                <div className="ltn__shop-options">
                  <ul className="justify-content-start">
                    <li>
                      <div className="ltn__grid-list-tab-menu ">
                        <div className="nav">
                          <a
                            className="active show"
                            data-bs-toggle="tab"
                            href="#liton_product_grid"
                          >
                            <i className="fas fa-th-large" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_product_list">
                            <i className="fas fa-list" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="d-none">
                      <div className="showing-product-number text-right">
                        <span>Showing 1–12 of 18 results</span>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <select className="nice-select">
                          <option>Default Sorting</option>
                          <option>Sort by popularity</option>
                          <option>Sort by new arrivals</option>
                          <option>Sort by price: low to high</option>
                          <option>Sort by price: high to low</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <select className="nice-select">
                          <option>Per Page: 12</option>
                          <option>Per Page: 20</option>
                          <option>Per Page: 30</option>
                          <option>Per Page: 50</option>
                          <option>Per Page: 100</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="liton_product_grid"
                  >
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <div className="row">
                        <div className="col-lg-12">
                          {/* Search Widget */}
                          <div className="ltn__search-widget mb-30">
                            <form action="#">
                              <input
                                type="text"
                                name="search"
                                placeholder="Search your keyword..."
                              />
                              <button type="submit">
                                <i className="fas fa-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                        {properties.map((item, index) => (
                          <div
                            key={`card-${index}`}
                            className="col-xl-6 col-sm-6 col-12"
                          >
                            <PropertyCardHorizontal {...item} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_product_list">
                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                      <div className="row">
                        <div className="col-lg-12">
                          {/* Search Widget */}
                          <div className="ltn__search-widget mb-30">
                            <form action="#">
                              <input
                                type="text"
                                name="search"
                                placeholder="Search your keyword..."
                              />
                              <button type="submit">
                                <i className="fas fa-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                        {properties.map((item, index) => (
                          <div
                            key={`card-vertical-${index}`}
                            className="col-12"
                          >
                            <PropertyCardVertical {...item} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ltn__pagination-area text-center">
                  <div className="ltn__pagination">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fas fa-angle-double-left" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">1</Link>
                      </li>
                      <li className="active">
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">...</Link>
                      </li>
                      <li>
                        <Link to="#">10</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fas fa-angle-double-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + 'assets/img/product/7.png'}
                              alt="#"
                            />
                          </div>
                          <div className="modal-product-info go-top">
                            <h5>
                              <Link to="/property-details">
                                Brake Conversion Kit
                              </Link>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" /> Successfully
                              added to your Wishlist
                            </p>
                            <div className="btn-wrapper">
                              <Link
                                to="/wishlist"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Wishlist
                              </Link>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img
                                src={publicUrl + 'assets/img/icons/payment.png'}
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ltn__modal-area ltn__quick-view-modal-area">
          <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                    {/* <i class="fas fa-times"></i> */}
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + 'assets/img/product/4.png'}
                              alt="#"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="modal-product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {' '}
                                  <a href="#"> ( 95 Reviews )</a>
                                </li>
                              </ul>
                            </div>
                            <h3>Brake Conversion Kit</h3>
                            <div className="product-price">
                              <span>$149.00</span>
                              <del>$165.00</del>
                            </div>
                            <div className="modal-product-meta ltn__product-details-menu-1">
                              <ul>
                                <li>
                                  <strong>Categories:</strong>
                                  <span className="go-top">
                                    <Link to="/blog">Parts</Link>
                                    <Link to="/blog">Car</Link>
                                    <Link to="/blog">Seat</Link>
                                    <Link to="/blog">Cover</Link>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="ltn__product-details-menu-2">
                              <ul>
                                <li>
                                  <div className="cart-plus-minus">
                                    <input
                                      type="text"
                                      defaultValue="02"
                                      name="qtybutton"
                                      className="cart-plus-minus-box"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="theme-btn-1 btn btn-effect-1"
                                    title="Add to Cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                    <span>ADD TO CART</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <hr />
                            <div className="ltn__social-media">
                              <ul>
                                <li>Share:</li>
                                <li>
                                  <a href="#" title="Facebook">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Twitter">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Linkedin">
                                    <i className="fab fa-linkedin" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Instagram">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + 'assets/img/product/1.png'}
                              alt="#"
                            />
                          </div>
                          <div className="modal-product-info go-top">
                            <h5 className="go-top">
                              <Link to="/property-details">
                                Brake Conversion Kit
                              </Link>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" />
                              Successfully added to your Cart
                            </p>
                            <div className="btn-wrapper">
                              <Link
                                to="/cart"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="theme-btn-2 btn btn-effect-2"
                              >
                                Checkout
                              </Link>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img
                                src={publicUrl + 'assets/img/icons/payment.png'}
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ShopGridV1;
