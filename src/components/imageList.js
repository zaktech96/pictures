import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ image }) {
  const renderedPhotos = image.map((image) => {
    return <ImageShow key={image.id} image={image} />;

    // this function maps receives each images from array,
    // then image gets passed to ImageShow as prop
  });

  return <div className="image-list">{renderedPhotos}</div>;
}

export default ImageList;
