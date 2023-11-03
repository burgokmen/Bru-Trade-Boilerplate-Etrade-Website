import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductList";
import ProductPage from "../pages/ProductPage";
import PricingPage from "../pages/PricingPage";
import TestPage from "../pages/TestPage";
import Contact from "../pages/Contact";

const PageBody = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/productList" exact>
        <ProductListPage />
      </Route>
      <Route path="/product" exact>
        <ProductPage />
      </Route>
      <Route path="/pricing" exact>
        <PricingPage />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/test" exact>
        <TestPage />
      </Route>
    </Switch>
  );
};

export default PageBody;
