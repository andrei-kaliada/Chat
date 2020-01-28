import React from 'react';
import { DialogItem } from '../index';

import './Dialogs.scss';


const Dialogs = ({ items }) => {

    return(
        <div className="dialogs">
           { items.map( item => (
                <DialogItem  
                date="Mon Nov 11 2019 21:20:24"
                user={item.user}
                message={item.lastMessage}
                unreaded={0}
                />
           ))}
        
        </div>
    );
}

export default Dialogs;