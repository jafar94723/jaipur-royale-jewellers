import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {withRouter} from 'react-router-dom'; 
const CollectionItem = ({ item,match,history }) => {
    let url = match.url;
    if(url === '/shop'){
        url = url + '/' + item.type.toLowerCase();
    }
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }} />
        <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
        </div>
        <CustomButton onClick={()=>history.push(`${url}/${item.id}`)} className='custom-button' inverted>VIEW ITEM</CustomButton>
    </div>
)}

export default withRouter(CollectionItem);