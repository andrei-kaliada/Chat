import React from 'react';
import { DialogItem } from '../index';
import orderBy from 'lodash/orderBy';
import isToday from 'date-fns/isToday';

import './Dialogs.scss';


const Dialogs = ({ items, userId }) => {

    return(
        <div className="dialogs">
           { orderBy(items,["created_at"],["desc"]).map( item => (
                <DialogItem  
                {...item}
                key={item._id}
                isMe={item.user._id === userId}
                />
            ))}
        
        </div>
    );
}

export default Dialogs;