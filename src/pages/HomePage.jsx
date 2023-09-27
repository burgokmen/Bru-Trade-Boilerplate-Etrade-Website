import { CarouselCustomNavigation } from "../components/Carousel";
import Editors from "../components/Editors";

const HomePage = () => {
  return (
    <div>
      <div>{CarouselCustomNavigation()}</div>
      <Editors />
    </div>
  );
};

export default HomePage;
