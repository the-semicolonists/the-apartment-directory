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
                    'assets/img/exterior-design-of-wooden-red-cottage-in-snowy-tow.jpg'
                  }
                  className="img-fluid rounded"
                  alt="Apartment 1"
                />
              </div>
              <div className="col-4 d-flex flex-column justify-content-between p-2">
                <img
                  src={
                    publicUrl +
                    'assets/img/beautiful-architecture-marseille-france-with-tall-business-buildings-white-sky2.jpg'
                  }
                  className="img-fluid rounded"
                  alt="Apartment 2"
                />
                <img
                  src={
                    publicUrl +
                    'assets/img/a-kitchen-with-a-stove-and-a-white-tile-wall.jpg'
                  }
                  className="img-fluid rounded"
                  alt="Apartment 3"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="fw-bold">
              YOUR ONE-STOP SOURCE OF APARTMENT INFORMATION FOR SOUTHERN
              CALIFORNIA
            </h2>
            <p className="mt-3 pb-4 border-bottom">
              The Apartment Directory is a book that contains the name, address,
              and PHONE NUMBERS, of apartment owners throughout the Southland.
              The ownership records contained in our directories are matched
              with a description of the property owned, i.e., the number of
              units, year of construction, and number of floors, for a complete
              ownership profile.
            </p>
            <p className="mt-2">
              If your business involves buying or selling real estate, managing
              investments, or providing a product or service to owners or
              purchasers, YOU need The Apartment Directory. Each directory is
              thoroughly researched and prepared with painstaking care to
              provide you the accurate, up-to-date information you need to
              operate efficiently.
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
                click here{' '}
              </a>{' '}
              to see a sample)
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
