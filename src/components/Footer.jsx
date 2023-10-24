import { phoneNumber } from "../utils";
import instagramIcon from "../asets/icons/icons8-instagram1.svg";
import watsApp from "../asets/icons/Vector.svg";
import mapImg from '../asets/images/mapImage.svg'
import '../components/styles/footerStyle.css'

function Footer() {
  return (
    <div className="footerWrap">
      <div className="contactContainer">
        <div className="contactsWrap">
          <h2 className="salesSectionTitle">Contact</h2>
          <h3 className="pohoneNUmber">{phoneNumber}</h3>
          <div className="socialWrap">
            <a href="https://www.instagram.com/" className="socialLinkWrap">
              <div className="socialLinkContainer">
                <img src={instagramIcon} alt="insIcon" />
                <p className="socialTitle">Instagram</p>
              </div>
            </a>
            <a href="https://web.whatsapp.com/" className="socialLinkWrap">
              <img src={watsApp} alt="watsAppIcon" />
              <p className="socialTitle">watsApp</p>
            </a>
          </div>
        </div>
        <div className="contactsWrap">
          <p className="salesSectionTitle">Address</p>
          <a href="https://www.google.com/search?q=telranDE" className="addressLink">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
          <p className="workHoursTitle">Working Hours:</p>
          <p className="workingHours">24 hours a day</p>
        </div>
      </div>
      <div className="mapContainer">
    <img className="mapImg" src={mapImg} alt="mapImg" />
      </div>
    </div>
  );
}
export default Footer;