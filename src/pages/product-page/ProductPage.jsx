import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductPage.css";
const ProductPage = () => {
  const product = {
    name: "",
    Specifications: {
      General: {
        ["Sales Package"]: "1 External SSD, USB Cable",
        ["Model Name"]: "SDSSDE30-1T00-G26",
        Type: "SSD",
        Capacity: "1 TB",
        Color: "Black",
        ["System Requirements"]: "Windows, Mac OS, Android",
        ["Form Factor"]: "Portable",
        ["Cloud Backup"]: "No",
      },
      ["Additional Features"]: {
        ["Number of Ports"]: 1,
        ["Connector Type"]: "Type C",
        ["Case Material"]: "Plastic",
        ["Data Transfer Rate"]: "800 MB/s",
      },
      Dimensions: {
        Width: "46.9 mm",
        Height: "96.9 mm",
        Depth: "9.91 mm",
        Weight: "40 g",
      },
      Warranty: {
        ["Warranty Summary"]: "3 Years Warranty",
        ["Warranty Service Type"]: "Carry-in",
        ["Covered in Warranty"]: "Manufacturing Defects",
        ["Not Covered in Warranty"]: "Physical Damages",
        ["Domestic Warranty"]: "3 Years",
      },
    },
    id: 1,
    tittle:
      "SanDisk E30 / 800 Mbs / Window,Mac OS,Android / Portable,Type C Enabled / USB 3.2 1 TB External Solid State Drive (SSD)  (Black)",
    images: {
      small: [
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/y/s/7/sdssde30-1t00-g26-sandisk-original-imagsgpmhcxmsxet.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/x/g/b/sdssde30-1t00-g26-sandisk-original-imags46jkmht2pzr.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/m/e/r/sdssde30-1t00-g26-sandisk-original-imagsgpmfdyshkyb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/h/i/m/sdssde30-1t00-g26-sandisk-original-imags46j8xqkg8np.jpeg?q=70",
      ],
      big: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/y/s/7/sdssde30-1t00-g26-sandisk-original-imagsgpmhcxmsxet.jpeg?q=70 ",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/x/g/b/sdssde30-1t00-g26-sandisk-original-imags46jkmht2pzr.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/m/e/r/sdssde30-1t00-g26-sandisk-original-imagsgpmfdyshkyb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/h/i/m/sdssde30-1t00-g26-sandisk-original-imags46j8xqkg8np.jpeg?q=70",
      ],
    },
    ratings: {},
    prices: { price: "20,500", discount: "65%" },
    offers: {
      ["Available Offers"]: [
        "Bank Offer 10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above",
        "Bank Offer 10% off on Federal Bank Credit Card and Credit EMI Txns, up to ₹2,000 on orders of ₹5,000 and above",
        "Bank Offer 5% Cashback on Flipkart Axis Bank Card",
        "Special Price Get extra 60% off (price inclusive of cashback/coupon)",
        " Buy this product and Get Extra ₹100 Off on Select Room Heaters",
        "EMI starting from ₹250/month",
      ],
    },
    highlights: [
      "Portable",
      "Hard Drive",
      "Capacity: 1 TB",
      "Connectivity: USB 3.2",
      "1 Port",
    ],
    services: ["3 Years Warranty", "Cash on Delivery available"],
    seller: {
      name: "MTAILMODEECOM",
      Rating: 4.9,
      services: [
        " 7 Days Service Center Replacement/Repair",
        "GST invoice available",
      ],
    },
  };
  const [currImg, setCurrImg] = useState(0);
  const handleHover = (i) => setCurrImg(i);
  const specificationFeature = (type) =>  <div className="specFeature">
  <div className="specTitle">{type}</div>
  <div className="specItems">
    {Object.getOwnPropertyNames(product.Specifications[type]).map(
      (property) => {
        return (
          <table key={property}>
            <tbody>
              <tr
                style={{
                  display: "flex",
                  paddingBottom: "16px",
                  flexFlow: "row wrap",
                  width: "100%",
                }}
              >
                <td
                  style={{ color: " #878787", paddingRight: "8px" }}
                >
                  {property}
                </td>
                <td>{product.Specifications[type][property]}</td>
              </tr>
            </tbody>
          </table>
        );
      }
    )}
  </div>
</div>
  return (
    <div className="pageContainer">
      <div className="picsContainer">
        <div className="prodLeftPanel">
          <div className="addToFavouritesButton">
            <FavoriteIcon
              sx={{ width: "16px", height: "16px", fill: "#c2c2c2" }}
            />
          </div>
          <div className="allPicsLayout">
            <ul style={{ all: "unset" }}>
              {product.images.small.map((img, i) => {
                return (
                  <div
                    onMouseEnter={() => handleHover(i)}
                    className="allImagesContainer"
                    key={i}
                  >
                    <img src={img} alt={product.name} />
                  </div>
                );
              })}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: " 1px solid #f0f0f0",
              width: "100%",
            }}
          >
            <div style={{ margin: "0 auto" }}>
              <div className="singleImageContainer">
                <img src={product.images.big[currImg]} alt={product.tittle} />
              </div>
            </div>
          </div>
        </div>
        <div className="buttonsContainer">
          <button className="addToCartButton">
            <ShoppingCartIcon />
            ADD TO CART
          </button>
          <button className="buyNowButton">
            <FlashOnIcon />
            BUY NOW
          </button>
        </div>
      </div>
      <div className="prodDetailsContainer">
        <span>{product.tittle}</span>
        <div className="offers">
          <span className="offersTitle">Available Offers</span>
          <ul>
            {product.offers["Available Offers"].map((offer) => {
              return (
                <div
                  className="listItems"
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                  key={offer}
                >
                  <img
                    style={{ height: "18px,", width: "18px" }}
                    src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    alt="ul-li-style"
                  />
                  <li>{offer}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <div style={{ display: "flex" }}>
          <div className="highlightsServices">
            <span>Highlights</span>
            <ul style={{ margin: 0, color: "#212121" }}>
              {product.highlights.map((highlight) => {
                return <li key={highlight}>{highlight}</li>;
              })}
            </ul>
          </div>
          <div className="highlightsServices">
            <span>Services</span>
            <ul style={{ margin: 0, color: "#212121" }}>
              {product.services.map((service) => {
                return <li key={service}>{service}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="highlightsServices seller">
          <span>Seller </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <ul style={{ margin: 0, color: "#212121" }}>
              <span style={{ color: "#2874f0" }}>{product.seller.name}</span>
              <div
                style={{
                  margin: "3px",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                {product.seller.Rating}{" "}
                <StarIcon sx={{ margin: "2px 0 0 2px", height: " 10px" }} />
              </div>

              {product.seller.services.map((service) => {
                return <li key={service}>{service}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="specifications">
          <div className="specificationsHeader">Specifications</div>
              {specificationFeature("General")}
              {specificationFeature("Dimensions")}
              {specificationFeature("Warranty")}
        </div>
        <div className="specificationsReadMore"></div>
      </div>
    </div>
  );
};

export default ProductPage;
