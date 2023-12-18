import "./ProductsSlide.css";
/* eslint-disable react/prop-types */
const ProductsSlide = ({ data }) => {
  return (
    <div className="productSlideContainer">
      <div className="titleLayout">
        <span className="titleTypography">{data.name}</span>
        <div style={{ backgroundColor: "#1c41d6" ,borderRadius:"42px",display:"flex"}}>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 17 17"
            style={{ margin: "4px" }}
          >
            <path
              d="m6.627 3.749 5 5-5 5"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="sliderLayout">
        <div className="sliderContainer">
          {data.products.map((product) => {
            return (
              <div className="groupContainer" key={product.group}>
                <div className="imageContainer">
                  <img alt={product.group} src={product.img} />
                </div>
                <div className="typographyContainer">
                  <span className="groupNameTypography">{product.group}</span>
                  <span className="offerTypography">{product.offer}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlide;
