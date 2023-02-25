/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProductsPage from '../ProductsPage';
import CataloguePage from '../CataloguePage';

const AppWrapper = styled.div`
  max-width: calc(500px);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/products" component={ProductsPage} />
        <Route path="/catalogue" component={CataloguePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
