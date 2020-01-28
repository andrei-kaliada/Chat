import React, { useReducer } from 'react';
import classNames from 'classnames';
import { IconRead } from '../index';
import isToday from 'date-fns/isToday';
import format  from 'date-fns/format';

import './DialogItems.scss';


const getMessageTime = created_at => {
    if(false){
        return format(created_at, 'HH:mm');
    }else{
        return format(created_at, 'DD.MM.YYYY');
    }
}

const getAvatar = avatar => {
    if(avatar){
        return (
            <img src={avatar} alt=""/>
        );
    }else{
        //make avatar
    }
}

const DialogItem = ({ user, message, date,unreaded}) => {

    return(
       <div className={classNames("dialogs__item" , {"dialogs__item--online":user.isOnline})}>
           <div className="dialogs__item-avatar">
               {/* <img src={user.avatar} alt={`${user.fullname}`} /> */}
               {getAvatar('https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1')}
              
           </div>
           <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(message.created_at)}                      
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    {message.text}
                {unreaded ?
                "" : <IconRead isMe={true} isReady={false} /> }
                   { unreaded > 0 && <div className="dialogs__item-info-bottom-count">
                       {unreaded}
                   </div>}
                </div>
           </div>
       </div>
    );
}

export default DialogItem;