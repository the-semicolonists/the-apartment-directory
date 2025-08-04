import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutSection from './section-components/about-section';
import ServiceSection from './section-components/service-section';
import MissionVisionSection from './section-components/mission-vision-section';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="About Us" />
      <AboutSection />
      <ServiceSection />
      <MissionVisionSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
