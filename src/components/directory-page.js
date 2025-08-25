import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ImageModal from './global-components/modal';
import CallToAction from './section-components/call-to-action';
import Footer from './global-components/footer';

const DirectoryPage = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Directory" />

      <div className="container pb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7 mb-4">
            <div className="row">
              <div className="col-8 p-2">
                <img
                  src={
                    publicUrl +
                    'assets/img/apartment-building-2.png'
                  }
                  className="img-fluid rounded"
                  alt="Apartment 1"
                />
              </div>
              <div className="col-4 d-flex flex-column justify-content-between p-2">
                <img
                  src={
                    publicUrl +
                    'assets/img/apartment-building-3.png'
                  }
                  className="img-fluid rounded"
                  alt="Apartment 2"
                />
                <img
                  src={
                    publicUrl +
                    'assets/img/apartment-building-4.png'
                  }
                  className="img-fluid rounded"
                  alt="Apartment 3"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="fw-bold">
              Your One-Stop Source for Apartment Ownership Data in Southern California
            </h2>

            <div className='border-bottom mt-3'>
              <p>
                The Apartment Directory gives you direct access to apartment owner contact information-names, addresses,
                and phone numbers-for properties across the Southland. Ownership records are paired with key property details such as:
              </p>

              <ul className="list-unstyled">
                <li>• Number of units </li>
                <li className='mt-0'>• Year of construction </li>
                <li className='mt-0'>• Number of floors </li>
                <li className='mt-0'>• Verified owner contact info </li>
              </ul>
            </div>

            <p className="mt-3">
              Whether you're buying or selling real estate, managing investments, or offering services to apartment owners, this is the resource trusted by
              professionals across the region. Our directories are thoroughly researched and regularly updated to give you the accurate data you need to drive better decisions
              and close more deals.
            </p>
          </div>
        </div>

        <div className="row mt-5 bg-light p-4 rounded">
          <div className="col-md-6 pb-4">
            <h5 className="fw-bold">Listings By Location</h5>
            <p>
              In this section, you will find alphabetical street listings, with
              building addresses in numerical order. By reading across each
              line, you will find the following: (
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#sampleByLocation"
              >
                click here
              </a>
              {' '} to see a sample)
            </p>
            <ul className="list-unstyled">
              <li>✓ Building date</li>
              <li>✓ Type of construction</li>
              <li>✓ Number of stories</li>
              <li>✓ Number of units</li>
              <li>✓ Date purchased by current owner</li>
              <li>✓ Book, page, and parcel number in County Records</li>
              <li>✓ Assessed value</li>
              <li>✓ Name and address of current owner</li>
              <li>✓ Telephone number of current owner (when available)</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Listing By Current Owner</h5>
            <p>
              In this section you will find present owners listed
              alphabetically... (
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#sampleByOwner"
              >
                click here{' '}
              </a>
              to see a sample)
            </p>
            <ul className="list-unstyled">
              <li>✓ Owners of apartment complexes</li>
              <li>✓ Owners’ addresses</li>
              <li>
                ✓ Apartment now held, their locations, and the number of units
                in each
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ImageModal
        imageUrl={publicUrl + 'assets/img/samplebyowner.jpg'}
        modalID="sampleByOwner"
      />
      <ImageModal
        imageUrl={publicUrl + 'assets/img/samplebylocation.jpg'}
        modalID="sampleByLocation"
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default DirectoryPage;
