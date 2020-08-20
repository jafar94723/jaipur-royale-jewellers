import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


//Route automatically passes 3 props to all Routes
class ShopPage extends React.Component{
  state = {
    loading:true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot =>updateCollections(convertCollectionsSnapshotToMap(snapshot)))
    this.setState({loading:false})
  }
  
  render(){
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>} />
        <Route path={`${match.url}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);

/*
match.path
because we dont wanna
hardcode /shop

for reusability

*/