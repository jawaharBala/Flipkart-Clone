import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import OfferCarousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import ProductsSlide from "./components/products/ProductsSlide";
import LoginPopup from "./components/login/login-popup/LoginPopup";

function App() {
  const [mode, setMode] = useState("light");
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
  return (
    <div className="container">
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
        </div>
        <LoginPopup/>
      </div>
    </div>
  );
}

export default App;
