import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';
import {compose} from 'redux';


const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),//2nd
    WithSpinner//1st
)(CollectionOverview);

export default CollectionOverviewContainer;