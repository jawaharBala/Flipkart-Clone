import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import OfferCarousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import ProductsSlide from "./components/products/ProductsSlide";
import LoginPopup from "./components/login/login-popup/LoginPopup";

function App() {
  const [mode, setMode] = useState("light");
  const [loginPopup, setLoginPopup] = useState(false);
  const electronicsBest = {
    name: "Best of Electronics",
    products: [
      {
        group: "Top Mirrorless Cameras",
        img: "https://rukminim1.flixcart.com/image/280/280/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=80",
        offer: "Shop Now!",
      },
      {
        group: "Wireless Mouse & Keyboard",
        img: "//rukminim1.flixcart.com/image/280/280/kzzw5u80/keyboard/multi-device-keyboard/o/2/d/km3322w-km3322w-keyboard-mouse-combo-anti-fade-spill-resistant-original-imagbvyatqteauf2.jpeg?q=80",
        offer: "From ₹169",
      },
      {
        group: "Best of Shavers",
        img: "https://rukminim1.flixcart.com/image/280/280/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=80",
        offer: "From ₹1649",
      },
      {
        group: "Top Selling SD Cards",
        img: "https://rukminim1.flixcart.com/image/280/280/l2jcccw0/memory-card/sdxc-uhs-i-card/6/b/c/sdsqua4-256g-gn6mn-sandisk-original-imagdv34rzuhp9f2.jpeg?q=80 ",
        offer: "From ₹429",
      },
      {
        group: "Printers",
        img: "https://rukminim1.flixcart.com/image/280/280/k0lbdzk0pkrrdj/printer-refurbished/a/5/h/c-laserjet-m1005-mfp-hp-original-imafjfx2hvjhmysr.jpeg?q=80",
        offer: "From ₹10190",
      },
      {
        group: "Top Selling DELL",
        img: "https://rukminim1.flixcart.com/image/280/280/xif0q/keyboard/gaming-keyboard/b/s/q/f2023-aula-original-imagnhc44uakb4zb.jpeg?q=80",
        offer: "From ₹9279",
      },
      {
        group: "BenQ Monitors",
        img: "https://rukminim1.flixcart.com/image/280/280/kkh6zrk0/monitor/p/w/q/xl2546k-xl2546k-benq-original-imafzthb6ztpfjr8.jpeg?q=80 ",
        offer: "Shop now",
      },
      {
        group: "Premium Powerbanks",
        img: "https://rukminim1.flixcart.com/image/280/280/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=80",
        offer: "From ₹599",
      },
    ],
  };
  const fashionBest = {
    name: "Fashion Best Sellers",
    products: [
      {
        group: "Safari wildcraft",
        img: "https://rukminim1.flixcart.com/image/280/280/jwgple80/backpack/n/e/w/spin-laptop-backpack-01-teal-fs0-0-11-001-laptop-backpack-original-imafh54gqnmpsczs.jpeg?q=80",
        offer: "Min. 65% off",
      },
      {
        group: "Men's Sweatshirts",
        img: "https://rukminim1.flixcart.com/image/380/380/xif0q/sweatshirt/w/d/j/s-hood1-do-four-lines-n-fashion-and-youth-original-imaghk5gxfcjfzyp.jpeg?q=80",
        offer: "From ₹599",
      },
      {
        group: "Trendy Kurtas",
        img: "https://rukminim1.flixcart.com/fk-p-flap/280/280/image/dca97fb4b0c593f8.jpg?q=80",
        offer: "Min 75% off!",
      },
      {
        group: "Anmi, Divastri and more",
        img: "https://rukminim1.flixcart.com/image/280/280/xif0q/sari/8/6/w/free-sknt17-d-divastri-unstitched-original-imagg9j9vvv8s3hb.jpeg?q=80",
        offer: "Min. 60-90% off!",
      },
      {
        group: "Leggings combo",
        img: "https://rukminim1.flixcart.com/image/170/170/klo27bk0/churidar/n/x/k/xxl-women-churidar-nakaash-original-imagyqy6evhh7xzc.jpeg?q=80 ",
        offer: "From ₹299",
      },
      {
        group: "Dresses, Tops & Jeans",
        img: "https://rukminim1.flixcart.com/image/280/280/xif0q/dress/j/s/f/s-kbt-559-krati-by-tara-original-imagg9hftvfxe56u.jpeg?q=80 ",
        offer: "Min. 60% off",
      },
      {
        group: "Max & Rangmanch",
        img: "https://rukminim1.flixcart.com/image/280/280/kuef2q80/kurta/h/n/y/s-dafksp20pi21aqua-max-original-imag7j8gnghzahsu.jpeg?q=80",
        offer: "Mn. ₹499",
      },
      {
        group: "Sweatshirts & Hoodies",
        img: "https://rukminim1.flixcart.com/image/280/280/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=80 ",
        offer: "Under ₹299",
      },
    ],
  };
  // const fashionBest = {
  //   name: "Fashion Best Sellers",
  //   products: [
  //     { group: "", img: "", offer: "" },
  //     { group: "", img: "", offer: "" },
  //     { group: "", img: "", offer: "" },
  //     { group: "", img: "", offer: "" },
  //     { group: "", img: "", offer: "" },
  //     { group: "", img: "", offer: "" },
  //     { group: "", img: "", offer: "" },
  //     { group: "", img: "", offer: "" },
  //   ],
  // };
  useEffect(() => {
    setTimeout(() => {
      setLoginPopup(true);
    }, 4000);
  }, []);
  return (
    <div className="container">
      {loginPopup && <LoginPopup setLoginPopup={setLoginPopup} />}
      <header className="navbar">
        <Navbar mode={mode} setMode={setMode} />
      </header>
      <div className="body">
        <Categories />
        <OfferCarousel />
        <div className="bankDiscount">
          <img
            alt="bank-discount"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/065bf4ed0fee4532.jpg?q=20"
          />
        </div>
        <div className="categoriesBest">
          <ProductsSlide data={electronicsBest} />
          <ProductsSlide data={fashionBest} />
        </div>
      </div>
    </div>
  );
}

export default App;
