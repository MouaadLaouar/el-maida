import React from "react";
import maida from "../../assets/maidaLogo.png";
import insta from "../../assets/insta.svg";
import FB from "../../assets/facebook.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Left">
        <a href="/">
          <img className="logo" src={maida} alt="#" />
        </a>
        <p>&copy; 2024 @el-maida All right reserved</p>
      </div>

      <div className="Footer-Light">
        <div className="SocialMedia">
          <a href="https://www.instagram.com/laiterie_el_maida/">
            <img className="Footer-icons" src={insta} alt="instagram link " />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100091371036870&mibextid=LQQJ4d">
            <img className="Footer-icons" src={FB} alt="instagram link " />
          </a>
        </div>
      </div>
    </div>
  );
}
