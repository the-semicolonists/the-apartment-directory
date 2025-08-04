const ImageSlide = ({ imageSrc }) => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="col-lg-12">
      <div className="ltn__img-slide-item-4">
        <a href={imageSrc} data-rel="lightcase:myCollection">
          <img src={imageSrc} alt="Image" />
        </a>
      </div>
    </div>
  );
};

const ProductSliderV1 = () => {
  // const images = [
  //   '/assets/img/img-slide/31.jpg',
  //   '/assets/img/img-slide/32.jpg',
  //   '/assets/img/img-slide/33.jpg',
  //   '/assets/img/img-slide/34.jpg',
  //   '/assets/img/img-slide/35.jpg',
  // ];

  const images = [
    'https://images.crexi.com/assets/1716953/d6b1b9d06dac4a3bbd6df0a7cf8514bf_1306x734.jpg',
    'https://images.crexi.com/assets/1716953/e0f20064a55b4c41919b6b353e0d2a6f_1306x734.jpg',
    'https://images.crexi.com/assets/1716953/94031bdcc12348829b471e493f579cb9_1306x734.jpg',
    'https://images.crexi.com/assets/1716953/c784438e9d814dbc95850ae9235bdd6f_1306x734.jpg',
    'https://images.crexi.com/assets/1716953/0d2751db12a34066a1f2ce440ab109fd_1306x734.jpg',
    'https://images.crexi.com/assets/1716953/cc3e1e2fb2e946aabd29f511938cc2d6_1306x734.jpg',
    'https://images.crexi.com/assets/1716953/aba0cfb119c947adb144a5994174a96e_1306x734.jpg',
  ];

  return (
    <div className="ltn__img-slider-area mb-90">
      <div className="container-fluid">
        <div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
          {images.map((imageSrc, index) => (
            <ImageSlide key={index} imageSrc={imageSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSliderV1;
