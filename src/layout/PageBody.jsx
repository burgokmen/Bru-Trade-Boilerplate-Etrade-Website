import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductList";
import ProductPage from "../pages/ProductPage";

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
    </Switch>
  );
};

export default PageBody;
