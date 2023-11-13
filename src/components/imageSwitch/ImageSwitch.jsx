import { useState, useEffect } from "react";
import "./imageSwitch.css";

const ImageSwitch = ({ ImageSwitchData }) => {
  const delay = 5000;
  const [currentImg, setCurrentImg] = useState(0);

  const switchFn = () => {
    const time = setTimeout(() => {
      setCurrentImg(
        currentImg === ImageSwitchData.length - 1 ? 0 : currentImg + 1
      );
      clearTimeout(time);
    }, delay);
  };

  ImageSwitchData.length ? switchFn() : null;

  return (
    <div className="rotary__switch">
      {ImageSwitchData.map((image, index) => (
        <div
          className={
            index === currentImg
              ? "rotary__switch-container scale-up-center-menu"
              : "hidden"
          }
          key={image.id}
        >
          <img
            loading="lazy"
            alt=""
            srcSet={`${image.mobile} 350w, ${image.comp} 1024w`}
            sizes="(max-width: 475px) 80vw, 100vw"
            src={image.comp}
            key={image.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSwitch;
