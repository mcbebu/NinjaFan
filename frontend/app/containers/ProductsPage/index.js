import React, { useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductsViewPage from './ProductsViewPage';
import ProductsEditPage from './ProductsEditPage';
import ProductsCreatePage from './ProductsCreatePage';
import HomePage from '../HomePage';
import CatalogueProductsPage from '../CataloguePage/CatalogueProductsPage';
import { CatalogueCartPage } from '../CataloguePage/CatalogueCart';
import CatalogueProductDetailPage from '../CataloguePage/CatalogueProductDetailPage';

export const CatalogueContext = React.createContext({})

export default function ProductsPage() {
    const [orders, setOrders] = useState({})
    return (
        <CatalogueContext.Provider value={{orders, setOrders}}>
        <Switch>
            <Route path={`/products/create`}>
                <ProductsCreatePage />
            </Route>
            <Route exact path={`/products/catalogue`}>
                <CatalogueProductsPage />
            </Route>
            <Route exact path={`/products/catalogue/:productID/view`}>
                <CatalogueProductDetailPage orders={orders} setOrders={setOrders} />
            </Route>
            <Route exact path={`/products/catalogue/cart`}>
                <CatalogueCartPage />
            </Route>
            <Route path={`/products/:productID/view`}>
                <ProductsViewPage />
            </Route>
            <Route exact path="/products">
                <HomePage />
            </Route>
        </Switch>
        </CatalogueContext.Provider>
    );
  }
  