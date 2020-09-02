import React from 'react';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import ItemPageContainer from '../item/item.container';
const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route exact path={`${match.url}/:collectionId`} component={CollectionPageContainer} />
      <Route path={`${match.url}/:collectionId/:itemId`} component={ItemPageContainer} />
    </div>
  );
}

export default ShopPage;