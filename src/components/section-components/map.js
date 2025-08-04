import { Component } from 'react';
class Map extends Component {
  render() {
    return (
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.832517163926!2d-118.31349!3d33.72302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c63e0xxxxxx!2s2515%20S%20Western%20Ave%2C%20San%20Pedro%2C%20CA%2090732!5e0!3m2!1sen!2sus!4v1699999999999"
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
