import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductViewPage from './ProductViewPage';
import ProductEditPage from './ProductEditPage';
import H1 from 'components/H1';
import ProductCreatePage from './ProductCreatePage';

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
        </Switch>
    </div>
    );
  }
  