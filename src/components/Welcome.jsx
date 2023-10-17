import { bannerImg } from "../utils";
import "./styles/welcome.css";

function Welcome() {
  return (
    <div className="welcomeWrap">
      <div className="welcomeInfoContainer">
        <h1 className="welcomeTitle">Sale</h1>
        <h2 className="welcomeInfo">New Season</h2>
        <button className="saleButton">Sale</button>
      </div>
      <img className="bannerImg" src={bannerImg} alt="bannnerImg" />
    </div>
  );
}
export default Welcome;
