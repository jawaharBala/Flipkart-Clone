import { useEffect, useState } from "react";
import "./Carousel.css";

const images = [
  {
    label: "Iphone",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ec32763f1308eb96.jpg?q=20",
  },
  {
    label: "Spiceject",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/17821708e64ed52d.jpg?q=20",
  },
  {
    label: "Sale",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a2d45385904d2bfa.jpg?q=20",
  },
  {
    label: "Laptop",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/09158220c9cec620.jpeg?q=20",
  },
  {
    label: "Zebronics",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20",
  },
  {
    label: "Poco",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9c3843ee9ca4c2e7.jpg?q=20",
  },
  {
    label: "Year end",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2c7142dcb842dc4b.jpeg?q=20",
  },
  {
    label: "Samsung F14",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7e6f7f22ab2b746f.jpg?q=20",
  },
];

const OfferCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState({
    slide: 0,
    direction: "forward",
  });
  const handlePrev = () => {
    if (currentSlide.slide > 0) {
      setCurrentSlide((prev) => {
        return { ...prev, slide: prev.slide - 1 };
      });
    } else {
      setCurrentSlide((prev) => {
        return { ...prev, slide: images.length - 1 };
      });
    }
  };
  const handleNext = () => {
    if (currentSlide.slide < images.length - 1) {
      setCurrentSlide((prev) => {
        return { ...prev, slide: prev.slide + 1 };
      });
    } else {
      setCurrentSlide((prev) => {
        return { ...prev, slide: 0 };
      });
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentSlide.direction === "forward") {
        if (currentSlide.slide === images.length - 1) {
          setCurrentSlide({ slide: images.length - 2, direction: "backward" });
        } else {
          setCurrentSlide({ ...currentSlide, slide: currentSlide.slide + 1 });
        }
      } else {
        if (currentSlide.slide === 0) {
          setCurrentSlide({ slide: 1, direction: "forward" });
        } else {
          setCurrentSlide({ ...currentSlide, slide: currentSlide.slide - 1 });
        }
      }
    }, 2900);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentSlide]);

  return (
    <div className="carousel">
      <button className="prevButton" onClick={handlePrev}>
        <span className="arrow prevArrow" />
      </button>
      <button className="nextButton" onClick={handleNext}>
        <span className="arrow" />
      </button>
      {images.map((img) => (
        <img
          alt={img.label}
          key={img.label}
          src={img.imgPath}
          style={{
            translate: `${-100 * currentSlide.slide}%`,
            transition: "999ms ease-in-out",
            width: "100%",
          }}
        />
      ))}
      <div className="slider">
        <div className="circleContainer">
          <div className="circleLayout">
            {Array(images.length)
              .fill(0)
              .map((num, i) => (
                <div
                  onClick={() => setCurrentSlide({ ...currentSlide, slide: i })}
                  style={{ cursor: "pointer" }}
                  key={i}
                  className="circle"
                />
              ))}
            <div
              className="worm"
              style={{
                transform: `translateX(${
                  currentSlide.slide * 12
                }px) scaleX(1) `,
                transition: "all 999ms ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCarousel;
