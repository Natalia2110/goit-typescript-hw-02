import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  onClick: (data: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={css["gallery-list"]}>
      {images.map((img) => {
        return (
          <li key={img.id} className={css["gallery-item"]}>
            <ImageCard data={img} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
