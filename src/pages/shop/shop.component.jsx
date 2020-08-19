import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

//Route automatically passes 3 props to all Routes
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
  </div>
)

export default ShopPage;

/*
match.path
because we dont wanna
hardcode /shop

for reusability

*/