import React from "react";
import { Contact, Footer } from "../../components";
import "./location.css";
import { Map } from "../../components";

const data = {
  company: "Hieu Anh Beo Beo - Mr. Beo's Studio",
  address:
    "Alley 256 Duong Quang Ham, ward 5, Go Vap district, Ho Chi Minh city, Viet Nam",
  phone: "(+84)-036-437-8893",
};

const Location = () => {
  return (
    <div className="location">
      <div className="location__container" id="location">
        <Contact ContactInfo={data} />
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Location;
