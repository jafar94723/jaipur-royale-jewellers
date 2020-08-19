import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';
const MenuItem = ({ title, imageUrl, size,history,match,linkUrl }) => (
    <div 
        className={`${size} menu-item`}
        onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className='background-image'
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{`SHOP NOW`}</span>
        </div>
    </div>)

//withRouter gives MenuItem access to React props
//maybe uses Object.assign to merge props objects
export default withRouter(MenuItem);