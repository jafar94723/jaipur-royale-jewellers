import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching,isCollectionsLoaded} from '../../redux/shop/shop.selectors';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


//Route automatically passes 3 props to all Routes
class ShopPage extends React.Component{
  /*state = {
    loading:true
  }

  unsubscribeFromSnapshot = null;
  */


  //DONT USE FETCH IN CONSTRUCTOR
  componentDidMount(){
    this.props.fetchCollectionsStart();
 }
  
 //render is called before componentDidMount
  render(){
    const {match,isFetching,isCollectionsLoaded} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props}/>} />
        <Route path={`${match.url}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching:selectIsCollectionFetching,
  isCollectionsLoaded:isCollectionsLoaded
})

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart:() => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

/*
match.path
because we dont wanna
hardcode /shop

for reusability

*/