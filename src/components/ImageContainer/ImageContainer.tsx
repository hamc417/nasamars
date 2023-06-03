import { useNavigate } from "react-router-dom";
import { IImageContainer } from "./interface";
//import "./styles.scss";

const ImageContainer = ({ img_src, alt, link, data }: IImageContainer) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link, { state: data });
  };

  return (
    <div className="image-container">
      <img onClick={handleClick} src={img_src} alt={alt} />
    </div>
  );
};

export default ImageContainer;
