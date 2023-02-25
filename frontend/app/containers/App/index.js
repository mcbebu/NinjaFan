/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import OrdersPage from 'containers/OrdersPage';
import Footer from 'components/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import GlobalStyles from '@mui/material/GlobalStyles';
import GlobalStyle from '../../global-styles';
import ProductPage from '../ProductPage';
import NinjaBizPage from '../NinjaBizPage';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const themeRed = createTheme({
  palette: {
    background: {
      default: "#C10230"
    }
  }
});

export default function App() {
  return (
    // <ThemeProvider theme={themeRed}>
      <AppWrapper>
        <GlobalStyles
        styles={{
          body: { backgroundColor: "lightyellow" }
        }}
        />
        <React.Fragment>
          <GlobalStyles styles={{ html: {backgroundColor: "red" }, body: { backgroundColor: "lightyellow" } }} />
        </React.Fragment>
        {/* <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Header /> */}
        <Switch>
          <Route path="/a" component={HomePage} />
          <Route path="/orders" component={OrdersPage} />
          <Route path="/biz" component={NinjaBizPage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/product" component={ProductPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    // </ThemeProvider>
  );
}
