import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ShopDetails from './shop-components/shop-details';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const PropertyDetails = () => {
  return (
    <>
      <Navbar />
      <PageHeader headertitle="Property Details" customclass="mb-0" />
      <ProductSlider />
      <ShopDetails />
      <CallToAction />
      <Footer />
    </>
  );
};

export default PropertyDetails;
