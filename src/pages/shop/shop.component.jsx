import React,{ useEffect }  from 'react';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsPending } from '../../redux/shop/shop.actions';

const ShopPage = (fetchCollectionsPending, match) => {
  useEffect(() => {
    fetchCollectionsPending()
  },[fetchCollectionsPending]);
  return (
    <div className='shop-page'>
      {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewContainer {...props}/>} /> */}
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route path={`${match.url}/:collectionId`} component={CollectionPageContainer} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsPending: () => dispatch(fetchCollectionsPending())
})

export default connect(null, mapDispatchToProps)(ShopPage);