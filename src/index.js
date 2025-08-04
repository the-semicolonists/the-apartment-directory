import { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home-page';
import About from './components/about-page';
import DirectoryPage from './components/directory-page';
import SubscriptionRatesPage from './components/subscription-rates-page';
import DirectorySubscriptionPage from './components/directory-subscription-page';
import ApartmentSubscriptionPage from './components/apartment-subscription-page';
import CommercialSubscriptionPage from './components/commercial-subscription-page';
import MailingSubscriptionPage from './components/mailing-subscription-page';
import LeaseAgreementPage from './components/lease-agreement-page';
import Contact from './components/contact';
import Shop from './components/feature-proposal/shop';
import ProductDetails from './components/product-details';

class Root extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/directory" component={DirectoryPage} />

            {/* Subscription Rates*/}
            <Route
              path="/subscription-rates-page"
              component={SubscriptionRatesPage}
            />
            <Route
              path="/directory-subscription-page"
              component={DirectorySubscriptionPage}
            />
            <Route
              path="/apartment-subscription-page"
              component={ApartmentSubscriptionPage}
            />
            <Route
              path="/commercial-subscription-page"
              component={CommercialSubscriptionPage}
            />
            <Route
              path="/mailing-subscription-page"
              component={MailingSubscriptionPage}
            />

            <Route
              path="/lease-agreement-page"
              component={LeaseAgreementPage}
            />
            <Route path="/contact" component={Contact} />

            <Route path="/properties" component={Shop} />
            <Route path="/property-details" component={ProductDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
