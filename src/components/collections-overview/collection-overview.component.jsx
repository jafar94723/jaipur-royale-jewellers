import React from 'react';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
const CollectionsOverview = ({collections})=>(
    <div className='collections-overview'>
            {collections.map(({ id, ...rest }) => (<CollectionPreview key={id} {...rest} />))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);