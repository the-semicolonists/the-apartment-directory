import { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false, // track if the mobile menu is open
    };
  }

  // Toggle menu open/close
  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const publicUrl = process.env.PUBLIC_URL + '/';
    const CustomClass = this.props.CustomClass ? this.props.CustomClass : '';
    const { isMenuOpen } = this.state;

    // Define the menu structure as an array of objects
    const menuItems = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/directory', label: 'Directory' },
      {
        path: '/subscription-rates-page',
        label: 'Subscription Rates',
        // subMenu: [
        //   { path: '/directory-subscription-page', label: 'Directory' },
        //   { path: '/apartment-subscription-page', label: 'Apartment Disk' },
        //   { path: '/commercial-subscription-page', label: 'Commercial Disk' },
        //   { path: '/mailing-subscription-page', label: 'Mailing Label/List' },
        // ],
      },
      { path: '/lease-agreement-page', label: 'Lease Agreement' },
      { path: '/contact', label: 'Contact' },
    ];

    // Function to render menu items and sub-menu
    const renderMenu = (items) => {
      return items.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.label}</Link>
          {item.subMenu && (
            <ul className="sub-menu">
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link to={subItem.path}>{subItem.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ));
    };

    return (
      <div>
        <header
          className={
            'ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- ' +
            CustomClass
          }
        >
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        <img
                          src={publicUrl + 'assets/img/apt-logo.png'}
                          alt="Logo"
                          className="w-75"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column">
                  <div className="header-menu d-none d-xl-block go-top">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>{renderMenu(menuItems)}</ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col--- ltn__header-options ltn__header-options-2 ">
                  {/* Mobile Menu Button */}
                  <div
                    className="mobile-menu-toggle d-xl-none"
                    onClick={this.toggleMenu} // Handle click to toggle menu
                  >
                    <a
                      className={`ltn__utilize-toggle ${isMenuOpen ? 'close' : ''}`}
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div
          id="ltn__utilize-mobile-menu"
          className={`ltn__utilize ltn__utilize-mobile-menu ${isMenuOpen ? 'ltn__utilize-open' : ''}`}
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  <img src={publicUrl + 'assets/img/apt-logo.png'} alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="ltn__utilize-menu">
              <ul>{renderMenu(menuItems)}</ul>
            </div>

            {/* SOCIALS */}
            {/* <div className="ltn__social-media-2">
              <ul>
                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
