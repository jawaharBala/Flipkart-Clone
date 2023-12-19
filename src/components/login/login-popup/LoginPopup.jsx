/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./LoginPopup.css";
const LoginPopup = ({ setLoginPopup }) => {
  const handleClick = (e) =>
    e.target.className === "popupContainer" && setLoginPopup(false);

  return (
    <div name="popupContainer" className="popupContainer" onClick={handleClick}>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="closeButton" onClick={() => setLoginPopup(false)}>
          X
        </button>
        <div className="popupLayout">
          <div className="leftPanel">
            <span style={{ fontSize: "28px", fontWeight: 500, color: "#fff" }}>
              Login
            </span>
            <span className="description">
              Get access to your Orders, Wishlist and Recommendations
            </span>
          </div>
          <div className="rightPanel">
            <div className="loginFormLayout">
              <form className="loginForm">
                <input placeholder="Enter Email/Mobile number" />
              </form>
            </div>
            <div className="disclaimerDiv">
              By continuing, you agree to Flipkart's{" "}
              <a target="_blank" href="/pages/terms">
                Terms of Use
              </a>{" "}
              and{" "}
              <a target="_blank" href="/pages/privacypolicy">
                Privacy Policy
              </a>
              .
            </div>
            <div className="OTPButton">
              <button>Request OTP</button>
            </div>
            <div className="signUpDiv">
              <button>New to Flipkart? Create an account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
