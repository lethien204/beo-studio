import React from "react";
import { FormEmailBtn, ImageSwitch } from "../../components";
import { switchImages } from "./imports.js";

import "./header.css";
import Footer from "../../components/footer/Footer.jsx";

const Header = ({ HeaderData }) => {
  return (
    <div className="studio__home">
      <div className="studio__header" id="home">
        <div className="studio__header-content">
          <div className="studio__header-content-title">
            <h1 className="">{HeaderData.title1}</h1>
          </div>
          <div className="studio__header-content-title">
            <h1 className="">{HeaderData.title2}</h1>
          </div>
          <div className="studio__header-content-title">
            <h1 className="">{HeaderData.title3}</h1>
          </div>

          <p>{HeaderData.description}</p>
          <FormEmailBtn FormEmailBtnLabel="Get Started" />
        </div>
        <ImageSwitch ImageSwitchData={switchImages} />
      </div>
      <Footer />
    </div>
  );
};

export default Header;
