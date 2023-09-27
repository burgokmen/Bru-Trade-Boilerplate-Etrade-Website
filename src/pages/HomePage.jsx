import BestSeller from "../components/BestSeller";
import { CarouselCustomNavigation } from "../components/Carousel";
import Editors from "../components/Editors";
import XProduct from "../components/XProduct";

const HomePage = () => {
  return (
    <div>
      <div>{CarouselCustomNavigation()}</div>
      <Editors />
      <BestSeller />
      <div>{CarouselCustomNavigation()}</div>
      <XProduct />
    </div>
  );
};

export default HomePage;
