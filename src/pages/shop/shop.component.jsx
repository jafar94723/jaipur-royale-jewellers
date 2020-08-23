import React from 'react';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';


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
    const {match} = this.props;
    return (
      <div className='shop-page'>
        {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewContainer {...props}/>} /> */}
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />        
        <Route path={`${match.url}/:collectionId`} component={CollectionPageContainer}/>} />
      </div>
    );
  }
}



const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart:() => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);

/*
match.path
because we dont wanna
hardcode /shop

for reusability

*/