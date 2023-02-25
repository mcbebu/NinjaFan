import React from 'react';
import { CartButton } from '../../../components/Button/CartButton';
import { CatalogueProducts } from '../../../components/CatalogueProducts';
import { CatalogueContext } from '../../ProductsPage';

export default function CatalogueProductsPage() {
  return (
    <CatalogueContext.Consumer>
      {
        ({ orders }) => (
          <>
            <CatalogueProducts />
            <CartButton orders={orders} />
          </>
        )
      }
    </CatalogueContext.Consumer>
  );
}
