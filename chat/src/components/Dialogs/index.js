import React from 'react';
import { DialogItem } from '../index';
import orderBy from 'lodash/orderBy';
import isToday from 'date-fns/isToday';

import './Dialogs.scss';


const Dialogs = ({ items, userId }) => {

    return(
        <div className="dialogs">
           { orderBy(items,["created_at"],["asc"]).map( item => (
                <DialogItem  
                date="Mon Nov 11 2019 21:20:24"
                user={item.user}
                message={item}
                unreaded={0}
                key={item._id}
                isMe={item.user._id === userId}
                />
            ))}
        
        </div>
    );
}

export default Dialogs;