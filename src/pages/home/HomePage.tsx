import { ImageContainer } from "../../components/ImageContainer";
import { SkeletonComponent } from "../../components/Skeleton";
import { Title } from "../../components/Title";
import { useNasa } from "../../network/hooks/useNasa";
import "./styles.scss";

const Home = () => {
  const { dataMars, isLoading } = useNasa();

  return (
    <section>
      <Title link="/details" sectionName="home" />
      {isLoading ? (
        <SkeletonComponent />
      ) : (
        <div className="home-page">
          {dataMars?.photos.map((photo) => (
            <ImageContainer
              data={photo}
              link="/details"
              key={photo.id}
              alt={photo.id.toString()}
              img_src={photo.img_src}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
