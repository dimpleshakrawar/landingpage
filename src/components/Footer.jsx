import facebookLogo from "../assets/facebookLogo.png";
import instagramLogo from "../assets/instagramLogo.png";
import whatsappLogo from "../assets/whatsappLogo.png";
import twitterLogo from "../assets/twitterLogo.png";
import logoDark from "../assets/ShipUpDarkLogo.png";
import Footerlogo from "../assets/Footerlogo.png";

export default function Footer() {
  const footerText =
    "ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint";
  return (
    <div
      class="p-5 text-center flex-wrap"
      style={{ backgroundColor: "#2c2d5b", color: "white" }}
    >
      <div class="d-flex gap-2 justify-content-between flex-wrap">
        <div>
          <img src={logoDark} alt="logo" class="mb-2" />
          <p style={{ width: "14rem" }}>{footerText}</p>
        </div>
        <div>
          <p>Explore</p>
          <p>About Us</p>
          <p>Our Warehouses</p>
          <p>News and Media</p>
        </div>
        <div>
          <p>Legal</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>Social media</p>
          <div class="d-flex gap-2">
            <img src={facebookLogo} alt="connect with us on facebook" />
            <img src={twitterLogo} alt="connect with us on twitter" />
            <img src={whatsappLogo} alt="connect with us on whatsapp" />
            <img src={instagramLogo} alt="connect with us on instagram" />
          </div>
        </div>
      </div>
      <hr />
      <img src={Footerlogo} alt="logo" />
    </div>
  );
}
