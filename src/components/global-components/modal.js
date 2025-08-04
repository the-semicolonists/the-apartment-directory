const ImageModal = ({ imageUrl, modalID }) => {
  return (
    <div
      className="modal fade"
      id={modalID}
      tabIndex="-1"
      aria-labelledby="sampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close p-5"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <img src={imageUrl} className="img-fluid" alt="Sample Listing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
