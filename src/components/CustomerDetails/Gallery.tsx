import { FC } from "react";
import { Image } from "../../types/types";

type TGalleryProps = {
  images: Array<Image>;
};

const Gallery: FC<TGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-12">
      {images.map((image) => (
        <div
          key={image.id}
          className="w-full h-full transition-transform transform hover:scale-105 duration-500"
        >
          <img
            src={image.image}
            className="object-fill rounded-xl shadow-lg opacity-0 animate-fade-in"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
