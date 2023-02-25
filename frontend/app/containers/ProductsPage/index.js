import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductsViewPage from './ProductsViewPage';
import ProductsEditPage from './ProductsEditPage';
import ProductsCreatePage from './ProductsCreatePage';
import HomePage from '../HomePage';
import { ProductContext } from '../../components/Products';

export default function ProductsPage() {
    return (
    <div>
        <Switch>
            <Route path={`/products/create`}>
                <ProductsCreatePage />
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
    </div>
    );
  }
  