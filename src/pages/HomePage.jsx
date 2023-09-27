import BestSeller from "../components/HomePageBodyComponents/BestSeller";
import { CarouselCustomNavigation } from "../components/HomePageBodyComponents/Carousel";
import Editors from "../components/HomePageBodyComponents/Editors";
import XProduct from "../components/HomePageBodyComponents/XProduct";
import BlogPosts from "../components/HomePageBodyComponents/BlogPosts";

const HomePage = () => {
  return (
    <div>
      <div>{CarouselCustomNavigation()}</div>
      <Editors />
      <BestSeller />
      <div>{CarouselCustomNavigation()}</div>
      <XProduct />
      <BlogPosts />
    </div>
  );
};

export default HomePage;
