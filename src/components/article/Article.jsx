import React from "react";
import { useState } from "react";
import "./article.css";

const Article = ({ ArticleData }) => {
  const [flipActive, setFlipActive] = useState("");
  const handleClick = () => {
    setFlipActive(flipActive === "active" ? "" : "active");
  };
  return (
    <div className="article">
      <div
        style={{ backgroundImage: "url(" + ArticleData.image + ")" }}
        className={"article__container " + flipActive}
        onClick={handleClick}
      >
        <div className="article__layout article__content">
          <h1>{ArticleData.title}</h1>
          <p>{ArticleData.description}</p>
        </div>
        <div className="article__layout article__package">
          <div className="article__package-1">
            <h2>
              Package {ArticleData.title} 1 - <span>{ArticleData.cost1}$</span>
            </h2>

            <p>
              Duration: <span>{ArticleData.duration1}</span>
            </p>

            <p>
              Number: <span>{ArticleData.number}</span> <br />
              (Plus charge for extra)
            </p>

            <p>Setup: {ArticleData.font1} solid color background font</p>

            <p>
              Get all photos shoot with up to {ArticleData.edit1} images edit
              per client
            </p>
          </div>

          <div className="article__package-2">
            <h2>
              Package {ArticleData.title} 2 - <span>{ArticleData.cost2}$</span>
            </h2>

            <p>
              Duration: <span>{ArticleData.duration2}</span>
            </p>
            <p>
              Number: <span>{ArticleData.number}</span> <br /> (Plus charge for
              extra)
            </p>
            <p>Setup: {ArticleData.font2} solid color background font</p>
            <p>
              Get all photos shoot with up to {ArticleData.edit2} images edit
              per client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;
