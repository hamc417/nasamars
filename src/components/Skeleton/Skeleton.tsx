import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonComponent = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton count={10} />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonComponent;
