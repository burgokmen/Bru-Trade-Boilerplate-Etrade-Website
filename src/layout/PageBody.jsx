import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductList";

const PageBody = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/productList" exact>
        <ProductListPage />
      </Route>
    </Switch>
  );
};

export default PageBody;
