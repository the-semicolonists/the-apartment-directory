import { Component } from 'react';
class Map extends Component {
  render() {
    return (
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.990878906215!2d-118.47080852428391!3d34.04410507316007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb5c9a15964f%3A0x203fdd7cef5b840b!2s12121%20Wilshire%20Blvd%20%231201%2C%20Los%20Angeles%2C%20CA%2090025!5e0!3m2!1sen!2sus!4v1759538453859!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    );
  }
}

export default Map;
