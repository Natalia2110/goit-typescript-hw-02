import React from "react";
import css from "./ImageCard.module.css";

import { Image } from "../App/App.types";
import { FC } from "react";

interface ImageCardProps {
  data: Image;
  onClick: (data: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ data, onClick }) => {
  return (
    <div>
      {/* <p>{data}</p> */}
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={css["gallery-img"]}
        onClick={() => onClick(data)}
      />
    </div>
  );
};

export default ImageCard;
