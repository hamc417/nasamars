import { IImgPrincipal } from "./interface";

export const ImgPrincipal = ({ src, alt }: IImgPrincipal) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};
