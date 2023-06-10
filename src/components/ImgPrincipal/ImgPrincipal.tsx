
import { IimgPrincipal } from "./interface";
//import "./styles.scss";

export const ImgPrincipal = ({ src, alt }: IimgPrincipal) => {

  return (
    <div className="image-main">
      <img src={src} alt={alt} />

    </div>
  
  )
}

//export default ImgPrincipal;
