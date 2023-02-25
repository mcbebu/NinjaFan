import React from 'react';
import { Route } from "@mui/icons-material";
import { Switch } from "react-router-dom";
import CatalogueProductsPage from "./CatalogueProductsPage";
import CatalogueProductDetailPage from './CatalogueProductDetailPage';

export default function CataloguePage() {
  return (
    <div>
      <Switch>
        <Route exact path="/catalogue/products">
          <CatalogueProductsPage />
        </Route>
        <Route exact path={`/catalogue/products/:productID`}>
          <CatalogueProductDetailPage />
        </Route>
      </Switch>
    </div>
  );
}
