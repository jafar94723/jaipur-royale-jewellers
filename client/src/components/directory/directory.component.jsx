import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
const Directory = ({sections}) =>(        
    <div className="directory-menu">
        {/*extracts rest of the object */}
    {sections.map(({id, ...rest}) =>(
        //spreads rest object like this : key1:value2,key2:value2...
        //if you dont spread it, rest will be just an object not even getting passed
        <MenuItem key={id} {...rest}/>
    ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);