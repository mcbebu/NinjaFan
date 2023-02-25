import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductViewPage from './ProductViewPage';
import ProductEditPage from './ProductEditPage';
import ProductCreatePage from './ProductCreatePage';
import HomePage from '../HomePage';
import { ProductContext } from '../../components/Products';

export default function ProductPage() {
    return (
    <div>
        <Switch>
            <Route path={`/product/create`}>
                <ProductCreatePage />
            </Route>
            <Route path={`/product/:productID/view`}>
                <ProductViewPage />
            </Route>
            <Route path={`/product/:productID/edit`}>
                <ProductEditPage />
            </Route>
            <Route exact path="/product">
                <HomePage />
            </Route>
        </Switch>
    </div>
    );
  }
  