/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import CenteredSection from './CenteredSection';
import { Products } from '../../components/Products';


export default function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Products page</title>
        <meta
          name="description"
          content="products page"
        />
      </Helmet>
      <div>
        <Products />
      </div>
    </article>
  );
}
