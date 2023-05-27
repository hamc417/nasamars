import { IImageContainer } from "./interface";
import "./styles.scss";
const ImageContainer = ({ img_src, alt }: IImageContainer) => {
  return (
    <div className="image-container">
      <img src={img_src} alt={alt} />
    </div>
  );
};

export default ImageContainer;
