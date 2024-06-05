import React from "react";

const Image = ({ imgInfo }) => {
  return (
    <div className="picture">
      <p>{imgInfo.photographer}</p>
      <div className="imageContainer">
        <img src={imgInfo.src.large} alt="" />
      </div>
      <p>
        檢視圖片:{" "}
        <a target="_blank" href={imgInfo.src.large}>
          點擊
        </a>
      </p>
    </div>
  );
};

export default Image;
