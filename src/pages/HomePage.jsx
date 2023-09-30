import BestSeller from "../components/HomePageBodyComponents/BestSeller";
import { CarouselCustomNavigation } from "../components/HomePageBodyComponents/Carousel";
import Editors from "../components/HomePageBodyComponents/Editors";
import XProduct from "../components/HomePageBodyComponents/XProduct";
import BlogPosts from "../components/HomePageBodyComponents/BlogPosts";

const HomePage = () => {
  return (
    <>
      <>{CarouselCustomNavigation()}</>
      <Editors />
      <BestSeller />
      <>{CarouselCustomNavigation()}</>
      <XProduct />
      <BlogPosts />
    </>
  );
};

export default HomePage;
