import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="studio__footer">
      <div className="studio__footer-contact">
        <p>
          <strong>Phone:</strong> +84 036 437 8893
        </p>
        <p>
          <strong>Email:</strong> hieuanhbeobeo@gmail.com
        </p>
      </div>
      <div className="studio__footer-copyrights">
        <p>
          <strong>@2023 MR.BEO Studio. All Rights Reserved</strong>
        </p>
      </div>
      <div className="studio__footer-media">
        <a href="https://www.facebook.com/profile.php?id=100069732395806">
          <FaFacebook size="27" />
        </a>
        <a href="https://www.tiktok.com/@hieuanhbeobeo?fbclid=IwAR38ZwvcSwaAPIF4g-gl_y14TmwAbU6DPc2Ps3tf4fVi5iVhc5QQ9WeHaGk">
          <FaTiktok size="27" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
