import React from "react";
import "./packages.css";
import { Article, Footer } from "../../components";
import { articleData } from "./imports.js";

const Packages = () => {
  return (
    <div className="packages__top">
      <div className="packages" id="packages">
        <h1 className="packages_title">Our Service Packages</h1>
        <div className="studio__packages">
          {articleData.map((article) => (
            <Article ArticleData={article} key={article.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
