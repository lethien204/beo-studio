import React from "react";
import { Carousel } from "../../components";
import { clientImages } from "./imports";
import "./work.css";
import Footer from "../../components/footer/Footer.jsx";

const Work = ({ WorkData }) => {
  return (
    <div className="studio__work-footer">
      <div className="studio__work" id="work">
        <div className="studio__work-title">
          <h1 className="">{WorkData.title}</h1>
        </div>

        <Carousel CarouselImages={clientImages} />

        <div className="studio__work-quotes">
          <div className="studio__work-quotes__container">
            <h3>
              {WorkData.quoteE}
              <br /> <span>...{WorkData.author}</span>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Work;
