import React, { useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductsViewPage from './ProductsViewPage';
import ProductsEditPage from './ProductsEditPage';
import ProductsCreatePage from './ProductsCreatePage';
import HomePage from '../HomePage';
import CatalogueProductsPage from '../CataloguePage/CatalogueProductsPage';

export const CatalogueContext = React.createContext({})

export default function ProductsPage() {
    const [orders, setOrders] = useState({})
    return (
        <CatalogueContext.Provider value={{orders, setOrders}}>
        <Switch>
            <Route path={`/products/create`}>
                <ProductsCreatePage />
            </Route>
            <Route path={`/products/catalogue`}>
                <CatalogueProductsPage />
            </Route>
            <Route path={`/products/:productID/view`}>
                <ProductsViewPage />
            </Route>
            <Route path={`/products/:productID/edit`}>
                <ProductsEditPage />
            </Route>
            <Route exact path="/products">
                <HomePage />
            </Route>
        </Switch>
        </CatalogueContext.Provider>
    );
  }
  