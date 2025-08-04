import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import ShopGrid from './shop-right-sidebar';
import CallToAction from '../section-components/call-to-action';
import Footer from '../global-components/footer';

const Shop_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Properties" />
      <ShopGrid />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Shop_V1;
