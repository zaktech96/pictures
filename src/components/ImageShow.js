function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt="" srcset="" />{" "}
      {/* to get image from api, do as shown here*/}
    </div>
  );
}

export default ImageShow;
