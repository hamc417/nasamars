import { ImageContainer } from "../../components/ImageContainer";
import { useNasa } from "../../network/hooks/useNasa";

const Home = () => {
  const { dataMars } = useNasa();

  return (
    <div>
      <h1>Hola desde home</h1>
      {dataMars?.photos.map((photo) => (
        <ImageContainer alt={photo.id.toString()} img_src={photo.img_src} />
      ))}
    </div>
  );
};

export default Home;
