/* eslint-disable react/no-unescaped-entities */
import "./LoginPopup.css";
const LoginPopup = () => {
  return (
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
        <div  className="disclaimerDiv">
          By continuing, you agree to Flipkart's{" "}
          <a  target="_blank" href="/pages/terms">
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
      </div>
    </div>
  );
};

export default LoginPopup;
