import React from 'react';
import './item.styles.scss';
import { connect } from 'react-redux';
import { selectItem } from '../../redux/shop/shop.selectors';
const ItemPage = ({ item }) => {
    return (
        <div className='item-container'>
            <div className='item-image'>
                <img src={`${item.imageUrl}`} alt="" />
            </div>
            <div className='item-info'>
                <h1>Name : {item.name}</h1>
                <h2>Price: {item.price}</h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.match.params.collectionId, ownProps.match.params.itemId)(state)
})
export default connect(mapStateToProps)(ItemPage);