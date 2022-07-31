import ImageGallery from "react-image-gallery";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

const MyGallery = (props) => {
  const images = props?.images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return <ImageGallery items={images}  showBullets />;
};

export default MyGallery;
